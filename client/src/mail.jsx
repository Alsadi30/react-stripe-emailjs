import React from  'react'
import emailjs from 'emailjs-com'


function Mail() {

    const sendMail = (e) =>{
      e.preventDefault();

      emailjs.sendForm('service_od3f0l6','template_kdcb42o',e.target,'user_6tHxD1vVdnRSZy2BB3Muy')
      .then(res=> console.log(res))
      .catch(e=>console.log(e))
    }

    return (
        <div>
            <form onSubmit={sendMail}>
            <div> 
        <label htmlFor="name">
           Name
        </label>
        <input type="text" name='name' id='name' className='name'/>
        </div>
        <div>
        <label htmlFor="email">
            Email
        </label>
        <input type="email" name='email' id='email' className='email' />
        </div>
        <div>
        <label htmlFor="from">
            From
        </label>
        <input type="text"  name='from' id='from'  className='from' />
        </div>
        <div>
        <label htmlFor="to">
          To
        </label>
        <input type="text" name='to' id='to' className='to' />
        </div>
        <div>
        <label htmlFor="date">
            Date
        </label>
        <input type="date" id='date' className='date' name='date' />
        </div>
        <button > Send </button>
 <div> Or </div>
        <a href="tel:01760420013"> Call Now</a>
        </form>
        </div>
    )
}

export default Mail;