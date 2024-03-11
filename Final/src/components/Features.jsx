
import '../assets/css/features.css';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import PersonSharpIcon from '@mui/icons-material/PersonSharp';
import LockPersonSharpIcon from '@mui/icons-material/LockPersonSharp';
import TrendingUpSharpIcon from '@mui/icons-material/TrendingUpSharp';
import StorageSharpIcon from '@mui/icons-material/StorageSharp';
import StarPurple500SharpIcon from '@mui/icons-material/StarPurple500Sharp';
import TipsAndUpdatesSharpIcon from '@mui/icons-material/TipsAndUpdatesSharp';
const FeatureLayout = () => {
    return (
        <div className="feat bg-gray pt-5 pb-5">
            <div className="container">
                <div className="row">
                    <div className="section-head col-sm-12">
                        <h1 className="display-1 py-4 text-center">R<span className="rnd">R</span></h1>
                        <h4><span>Ready to</span> Roll?</h4>
                        <p>Explore a vast database of job openings from various industries.</p>
                    </div>

                    <div className="col-lg-4 col-sm-6">
                        <div className="item">
                            <span className="icon feature_box_col_one">
                                {/* Your SVG or icon component */}
                                <StarPurple500SharpIcon sx={{ fontSize: '3rem' }}/>
                            </span>
                            <h6>Awarded</h6>
                            <p>Explore a vast database of job openings from various industries</p>
                        </div>
                    </div>

                    <div className="col-lg-4 col-sm-6">
                        <div className="item">
                            <span className="icon feature_box_col_two">
                                {/* Your SVG or icon component */}
                                <StorageSharpIcon sx={{ fontSize: '3rem' }}/>
                            </span>
                            <h6>The best reviews</h6>
                            <p>Create and manage user accounts with personalized profiles.</p>
                        </div>
                    </div>

                    <div className="col-lg-4 col-sm-6">
                        <div className="item">
                            <span className="icon feature_box_col_three">
                                {/* Your SVG or icon component */}
                                <TipsAndUpdatesSharpIcon sx={{ fontSize: '3rem' }}/>
                            </span>
                            <h6>Open source</h6>
                            <p>Stay informed about industry trends, career advice, and professional development resources.</p>
                        </div>
                    </div>

                </div>
                <div className="row">
                    

                    <div className="col-lg-4 col-sm-6">
                        <div className="item">
                            <span className="icon feature_box_col_one">
                                {/* Your SVG or icon component */}
                                <EmojiEventsIcon sx={{ fontSize: '3rem' }}/>
                            </span>
                            <h6>Awarded</h6>
                            <p>Stay informed about industry trends, career advice, and professional development resources.</p>
                        </div>
                    </div>
                    <div className="col-lg-4 col-sm-6">
                        <div className="item">
                            <span className="icon feature_box_col_one">
                                <LockPersonSharpIcon sx={{ fontSize: '3rem' }}/>
                                {/* Your SVG or icon component */}
                            </span>
                            <h6>Awarded</h6>
                            <p>Ensure the confidentiality and security of user data with robust privacy measures.</p>
                        </div>
                    </div>

                    <div className="col-lg-4 col-sm-6">
                        <div className="item">
                            <span className="icon feature_box_col_two">
                                <PersonSharpIcon sx={{ fontSize: '3rem' }}/>
                                {/* Your SVG or icon component */}
                            </span>
                            <h6>The best reviews</h6>
                            <p>Create and manage user accounts with personalized profiles.</p>
                        </div>
                    </div>

                    <div className="col-lg-4 col-sm-6">
                        <div className="item">
                            <span className="icon feature_box_col_three">
                                <TrendingUpSharpIcon sx={{ fontSize: '3rem' }}/>
                                {/* Your SVG or icon component */}
                            </span>
                            <h6>Open source</h6>
                            <p>Stay informed about industry trends, career advice, and professional development resources.</p>
                        </div>
                    </div>
                 

                </div>
            </div>
        </div>
    );
};

export default FeatureLayout;
