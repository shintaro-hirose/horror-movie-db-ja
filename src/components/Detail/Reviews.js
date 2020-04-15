import React from 'react'
import ReviewItem from './ReviewItem';

export default function Reviews({reviews}) {
    return (
        <div>
            {
                reviews ? (
                    reviews.length === 0 ? (
                        <p>no reviews</p>
                    ) : (
                        reviews.map((item,index) =>{
                            return(
                                <ReviewItem review={item} key={index} />
                            )
                        }) 
                    )
                ) : (
                    <p>loading</p>
                )
            }
        </div>
    )
}
