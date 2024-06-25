import React from 'react';
import '../../App.css';

export default function Howitworks() {
  return (<><h1 className='howitworksh1'>Description:</h1>
            <p1 className='howitworksp1'>
                So, how this website works is that we 
                use react.js to create a couple of code <br />
                prompts that would take in your username, 
                and output your trophies that you <br />
                have earned on a specific gaming platform. 
                We currently offer any combination  <br />
                of Playstation, Steam or Xbox trophies. 
                Due note that this isn't a perfect tracker, <br />
                so it may not show all of the games that 
                a person may have. There could be <br />
                mutiple reasons that some games may not 
                consist of having trophies, one could <br />
                be that a game may not just have any trophies 
                or it's a DLC that is unrecognized.
            </p1>
        </>);
}