import React from 'react';
import { Metadata } from "next";
import ContactForm from '@/components/ContactForm';
import Image from "next/image";

export const metadata: Metadata = {
  title: "Dr. Now MD",
  description: "",
};

function Order() {
  return (
    <div className='order-page'>
        <div className='row1'>
            <div className='row1-left'>
                <Image 
                src="/images/book.jpg" 
                alt="" 
                width={375}    // original image width
                height={500}   // original image height
                style={{ width: "100%", height: "auto" }}
                />
            </div>
            <div className='row1-right'>
                <h2>The Scale Does Not Lie, People Do</h2>
                <div className='rating-wrap'>
                    <div className='left'>
                        <p>by <span>Younan Nowzaradan</span> (Author)</p>
                    </div>
                    <div className='right'>
                        <p>5.0<span className="emoji">&#x2B50;&#x2B50;&#x2B50;&#x2B50;&#x2B50;</span> <span className='rating'>2,941 ratings</span></p>
                    </div>
                </div>
                <div className='book-intro'>
                    <p>If you are battling obesity, you are not alone. This book is the product of the experiences of an internationally known physician with over four decades of treatment of all forms of obesity. It represents working with individuals that are suffering from obesity and strive to overcome the challenges associated with this disease.</p>
                    <p>The valuable information that you will receive in this book will provide you with the best tools which will guide you to make the appropriate changes that are necessary to improve your health, maintain a proper weight and live a better, healthy and most importantly an enjoyable life.</p>
                    <p>It is time to learn about ourselves, our body, the environment, genetics and nutrition. The objective of the book is to inspire and influence you to develop a positive attitude in your life and maintain such a positive attitude no matter how hard things get in your life. </p>
                    <p>I hope you have the desire to change your life for a better and healthier one and have the willingness and determination to work hard and never give up on reaching your goals in life.</p>
                </div>
            </div>
        </div>
        <div className='row2'>
            <div className='row2-left'>
                <h2>How to Order My Book</h2>
                <div className='how-to-order'>
                    <div className='item'><div className='number'>1.</div> <div className='desc'>Enter your name, email address, and choose your preferred payment method. Then click “Place Order”.</div></div>
                    <div className='item'><div className='number'>2.</div> <div className='desc'>You will receive an invoice by email within 30 minutes.</div></div>
                    <div className='item'><div className='number'>3.</div> <div className='desc'>After making payment, kindly send your receipt to drzaradan@zohomail.com. Once confirmed, your book will be delivered to your email within 15 minutes.</div></div>
                </div>
            </div>
            <div className='row2-right'>
                <ContactForm />
            </div>
        </div>
        <div className='row3'>
            <div className='row3-left'></div>
            <div className='row3-right'>
                <h1 className='subject'>Top reviews from the United States</h1>
                <div className='review'>
                    <div className='image-block'>
                        <div className='image-wrap'>
                            <Image 
                            src="/images/default.png"
                            className="avatar-img"
                            alt="" 
                            fill
                            />
                        </div>
                        <span className='name'>jameelah</span>
                    </div>
                    <div className='star-block'>
                        <div className='image-wrap'>
                            <Image 
                            src="/images/5star.png"
                            alt="" 
                            fill
                            style={{ objectFit: 'contain' }}
                            />
                        </div>
                        <span className='comment'>Great book</span>
                    </div>
                    <p className='reviewed-in'>Reviewed in the United States on July 23, 2025</p>
                    <h5 className='verified'>Verified Purchase</h5>
                    <div className='full-comment'>
                        <p>Engaging</p>
                        <p>Well written</p>
                        <p>Worth it</p>
                        <p>Not disappointing</p>
                        <p>Has a lot of topics</p>
                        <p>Easy to read and understand</p>
                        <p>Applicable concepts to normal life</p>
                    </div>
                    <p className='final'>One person found this helpful</p>
                </div>

                <div className='review'>
                    <div className='image-block'>
                        <div className='image-wrap'>
                            <Image 
                            src="/images/default.png"
                            className="avatar-img"
                            alt="" 
                            fill
                            />
                        </div>
                        <span className='name'>Lillian M. Incavo</span>
                    </div>
                    <div className='star-block'>
                        <div className='image-wrap'>
                            <Image 
                            src="/images/5star.png"
                            alt="" 
                            fill
                            style={{ objectFit: 'contain' }}
                            />
                        </div>
                        <span className='comment'> Very knowledgeable and good advice. I love Dr. Now</span>
                    </div>
                    <p className='reviewed-in'>Reviewed in the United States on July 10, 2025</p>
                    <h5 className='verified'>Verified Purchase</h5>
                    <div className='full-comment'>
                        <p> I learned a lot from reading this book. I appreciate Dr. Now caring for the obese. So many doctors just don&apos;t want to be bothered. He is a great Doctor!</p>
                    </div>
                    <p className='final'>3 people found this helpful</p>
                </div>


                <div className='review'>
                    <div className='image-block'>
                        <div className='image-wrap'>
                            <Image 
                            src="/images/jenifer.jpg"
                            className="avatar-img"
                            alt="" 
                            fill
                            />
                        </div>
                        <span className='name'>Jennifer</span>
                    </div>
                    <div className='star-block'>
                        <div className='image-wrap'>
                            <Image 
                            src="/images/5star.png"
                            alt="" 
                            fill
                            style={{ objectFit: 'contain' }}
                            />
                        </div>
                        <span className='comment'>Very informative</span>
                    </div>
                    <p className='reviewed-in'>Reviewed in the United States on March 28, 2025</p>
                    <h5 className='verified'>Verified Purchase</h5>
                    <div className='full-comment'>
                        <p>This book has everything from exercising to recipes. It breaks down the cause of obesity and tells you how to slim down. It&apos;s a great book. Very easy read.</p>
                    </div>
                    <p className='final'>11 people found this helpful</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Order