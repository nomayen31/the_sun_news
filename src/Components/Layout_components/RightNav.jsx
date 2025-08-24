import React from 'react';
import SocialLogin from '../SocialLogin';
import FindUs from '../FindUs';
import QZone from '../Qzone';
import Advertisement from '../Advertisement';

const RightNav = () => {
    return (
        <div>
            <SocialLogin/>
            <FindUs/>
            <QZone/>
            <Advertisement/>
        </div>
    );
};

export default RightNav;