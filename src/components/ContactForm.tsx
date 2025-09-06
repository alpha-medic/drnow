"use client";

import React from 'react';
import { z } from 'zod';
import { zodResolver } from "@hookform/resolvers/zod";
import { SubmitHandler, useForm, Controller} from "react-hook-form";
import toast from "react-hot-toast";
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from '@/components/ui/select';


const checkoutSchema = z.object({
  name: z.string().min(1, 'Name is required'),
  email: z.string().email('Invalid email'),
  payment_method: z.string().min(3, 'Select an option'),
});
type FormFields = z.infer<typeof checkoutSchema>;



export default function CheckoutForm() {

    const {
        register,
        control,  // for custom components
        handleSubmit,
        reset, 
        formState: { errors, isSubmitting },
    } = useForm<FormFields>({
        resolver: zodResolver(checkoutSchema),
    });

    const handleCountryChange = async () => {
        
    }


    const onSubmit: SubmitHandler<FormFields> = async (data) => {

        const formData = {
            name: data.name,
            email: data.email,
            payment_method: data.payment_method,
        };


        // const res = await fetch('/api/resend/contact', {
        //     method: 'POST',
        //     body: JSON.stringify(formData),
        // });

        // const result = await res.json();
        // if (result.success) {

        const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/telegram/contact`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(formData),
        });
        const result = await res.json();
        if (result.success) {
            toast.success("Your order is successful");
            reset(); 
        }else {
            toast.error("Failed to send message. Please try again");
        }
    };


    return (
        <form 
            className='body-section'
            onSubmit={handleSubmit(onSubmit)}
            >
                <div className='form-card'>
                    <div className='form-wrapper'>
                        <div className='duo-input-wrap'>
                            <div className='duo-item'>
                                <Input
                                {...register("name")}
                                type="text"
                                className="input-general border-zinc-700"
                                placeholder='Name'
                                />
                                {errors.name && (
                                    <p className="error-msg">{errors.name.message}</p>
                                )}
                            </div>
                            <div className='duo-item'>
                                <Input
                                {...register("email")}
                                type="email"
                                className="input-general border-zinc-700"
                                placeholder='Email address'
                                />
                                {errors.email && (
                                    <p className="error-msg">{errors.email.message}</p>
                                )}
                            </div>
                        </div>
                        <div className='single-input-wrap'>
                                <Controller
                                control={control}
                                name="payment_method"
                                render={({ field }) => (
                                    <Select
                                    onValueChange={async (value) => {
                                        field.onChange(value);
                                        await handleCountryChange();
                                    }}
                                    value={field.value}>
                                        <SelectTrigger className="w-full input-general border border-zinc-700 text-white">
                                            <SelectValue
                                            className="text-white"
                                            placeholder="Select your prefered payment method" />
                                        </SelectTrigger>
                                        <SelectContent className="bg-zinc-900 text-white">
                                            <SelectGroup className="select-group-cs p-2 rounded">
                                                <SelectLabel className="select-label-cs text-white tracking-wide mb-1">Select your prefered payment method</SelectLabel>
                                                    <SelectItem
                                                    className="select-item-cs text-white"
                                                    value="western union transfer">Western Union Transfer</SelectItem>
                                                    <SelectItem 
                                                    className="select-item-cs text-white"
                                                    value="cashapp">Cash App</SelectItem>
                                                    <SelectItem 
                                                    className="select-item-cs text-white"
                                                    value="zelle">Zelle</SelectItem>
                                            </SelectGroup>
                                        </SelectContent>
                                    </Select>
                                )}
                                />
                                {errors.payment_method && (
                                    <p className="error-msg">{errors.payment_method.message}</p>
                                )}
                        </div>

                    </div>
                    <button 
                        className="contact-submit-btn"
                        disabled={isSubmitting} 
                        type="submit">
                            {isSubmitting ? "Sending..." : "Place Order"}
                    </button>
                    {errors.root && <div className="root-error text-red-500">{errors.root.message}</div>}
                </div>
        </form>
    )
}
