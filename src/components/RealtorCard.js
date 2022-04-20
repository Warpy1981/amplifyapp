import React from 'react';

const RealtorCard = ({realtor, location}) => {
    if (!realtor) {
        return <div>Loading</div>
    }

    return (
        <div className={'realtor-card'}>
            <div className={'ui card'}>
                <div className={'image'}>
                    <img className={'realtor-image'} src={realtor.picture.large}/>
                </div>
                <div className={'content'}>
                    <div className={'description'}>
                        <span>Hi my name is {realtor.name.first} {realtor.name.last} and I would love to help you find the home of your dreams.
                            I've been serving the {location} for over {realtor.dob.age - 20} years. Please check out the videos at the right
                        and give me a call at {realtor.phone} or send me an email at {realtor.email} and let the adventure begin.
                        </span>
                    </div>
                </div>

            </div>
        </div>
);
}

export default RealtorCard;