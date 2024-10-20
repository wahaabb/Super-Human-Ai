import React from 'react';
export default function cards(props) {
    return (

        <div className='col-lg-4 col-sm-12 col-md-6 mt-2'>
            <div class="card text-center mx-auto" data-aos="zoom-in">
                <img class="mt-3" id="imgsize" src={props.img} alt="icon" />
                <h6>{props.heading}</h6>
                <p class="p-3">{props.text}</p>
            </div>
        </div>

    )
}
