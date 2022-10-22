import React from 'react'
import { PhoneIcon, MapPinIcon, EnvelopeIcon } from '@heroicons/react/24/solid'
import { useForm, SubmitHandler } from "react-hook-form";
import { PageInfo } from '../typings';

type Inputs = {
  name: string,
  email: string,
  subject: string,
  message: string,
};


type Props = {
    pageInfo: PageInfo
}

function ContactMe({pageInfo}: Props) {
    const { 
        register, 
        handleSubmit, 
        watch, 
    } = useForm<Inputs>();

    const onSubmit: SubmitHandler<Inputs> = formData => {
        window.location.href = `mailto:oussama.fajraoui1@gmail.com?subject=${formData.subject}&body=Hi, my name is ${formData.name}. ${formData.message} (${formData.email})`
    }
  

  return (
    <div className='h-screen flex relative flex-col text-center md:text-left md:flex-row max-w-7x1 px-10 justify-evenly mx-auto items-center'>
        <h3 className='absolute top-16 uppercase tracking-[20px] text-gray-500 text-2x1'>
        Contact
        </h3>

        <div className='flex flex-col space-y-10'>
            <h4 className='text-4x1 font-semibold text-center'>
                {" "}
                <span className='decoration-[#F7AB0A]/50 underline'></span>
            </h4>
            <div className='space-y-10'>

                <div className='flex items-center space-x-5 justify-center'>
                <PhoneIcon className='text-[#F7AB0A] h-7 w-7 animate-pulse'/>
                <p className='text-2x1'>{pageInfo.phoneNumber}</p>
                </div>

                <div className='flex items-center space-x-5 justify-center'>
                <EnvelopeIcon className='text-[#F7AB0A] h-7 w-7 animate-pulse' />
                <p className='text-2x1'>{pageInfo.email}</p>
                </div>

                <div className='flex items-center space-x-5 justify-center'>
                <MapPinIcon className='text-[#F7AB0A] h-7 w-7 animate-pulse' />
                <p className='text-2x1'>{pageInfo.adress}</p>
                </div>
            </div>
            <form 
            onSubmit={handleSubmit(onSubmit)}
             className='flex flex-col space-y-2 w-fit mx-auto'>
                <div className='flex space-x-2'>
                    <input 
                    {...register('name')}
                    type="text"
                    className='contentInput'
                    placeholder='Name'
                    />
                    <input 
                    {...register('email')}
                    type="email"
                    className='contentInput'
                    placeholder='Email'
                    />
                </div>
                <input 
                {...register('subject')}
                type="text"
                className='contentInput'
                placeholder='Subject'
                />
                <textarea 
                {...register('message')}
                className='contentInput'
                placeholder='Message'
                />
                <button 
                type="submit" 
                className='bg-[#F7AB0A] py-3 px-10 rounded-md text-blank font-bold text-lg'>
                    Submit
                </button>
            </form>
        </div>
    </div>
  )
}

export default ContactMe