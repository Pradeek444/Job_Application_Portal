package com.jobapplication.pradeek.utils;

import java.security.Key;
import java.util.Date;
import java.util.HashMap;
import java.util.Map;
import java.util.function.Function;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.stereotype.Service;


import io.jsonwebtoken.Claims;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;
import io.jsonwebtoken.io.Decoders;
import io.jsonwebtoken.security.Keys;

@Service
public class JwtUtil {

    @Value("${application.security.jwt.secret_key}")
    private String secret_key;

    @Value("${application.security.jwt.expiration_date}")
    private long expiration_date;


    public String extractUsername(String token){
        return extractClaim(token, Claims::getSubject);
    }

    private <T> T extractClaim(String token, Function<Claims,T> claimResolver){
        final Claims claims = extractAllClaims(token);
        return claimResolver.apply(claims);
    }
    
    private Claims extractAllClaims(String token){
        return Jwts.parserBuilder().
        setSigningKey(getSigninKey()).
        build().
        parseClaimsJws(token).
        getBody();
    }

    private Key getSigninKey(){
        byte[] keyBytes = Decoders.BASE64.decode(secret_key);
        return Keys.hmacShaKeyFor(keyBytes);
    }

    public boolean isTokenValid(String token,UserDetails userDetails){
        final String username = extractUsername(token);
        return (username.equals(userDetails.getUsername())) && !isTokenExpired(token);
    }

    private boolean isTokenExpired(String token){
        return extractExpiration(token).before(new Date());
    }
    private Date extractExpiration(String token){
        return extractClaim(token, Claims::getExpiration);
    }

    public String generateToken(UserDetails userDetails) {
        return buildToken(new HashMap<>(), userDetails, expiration_date);
    }

    public String generateToken(Map<String, Object> claims, UserDetails userDetails) {
        return buildToken(claims, userDetails, expiration_date);
    }
    public String buildToken(Map<String, Object> claims, UserDetails userDetails,long expiration) {
        return Jwts.builder()
        .setClaims(claims)
        .setIssuer("prathi")
        .setSubject(userDetails.getUsername())
        .setIssuedAt(new Date(System.currentTimeMillis()))
        .setExpiration(new Date(System.currentTimeMillis()+ expiration))
        .signWith(getSigninKey(), SignatureAlgorithm.HS256)
        .compact();
    }
}
