import React from 'react';
import Footer from '../../Common/Footer/Footer';
import Header from '../../Common/Header/Header';

const Blogs = () => {
    return (
        <div>
            <Header></Header>
            <div className='flex justify-center my-10'>
                <button className='border border-gray-600 rounded px-2.5 py-0.5' type="button" data-bs-toggle="collapse" data-bs-target=".multi-collapse" aria-expanded="false" aria-controls="multiCollapseExample1 multiCollapseExample2">Question-Answer</button>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mx-10 mb-10 md:mx-40">
                <div>
                    <div className="collapse multi-collapse" id="multiCollapseExample1">
                        <div className="block p-6 rounded-lg shadow-lg bg-white">
                            ### Answer No. 1 <br />
                            <span className='font-medium text-lg'>Difference between javascript and nodejs</span><br />
                            JavaScript is a simple programming language that runs in any browser JavaScript Engine. Whereas Node JS is an interpreter or running environment for a JavaScript programming language. Without Node.js Javascript can only be run in the browsers, but with the help of Node.js Javascript can run outside the browser. JS is for client side, while node.js is for server side. 
                        </div>
                    </div>
                </div>
                <div>
                    <div className="collapse multi-collapse" id="multiCollapseExample2">
                        <div className="block p-6 rounded-lg shadow-lg bg-white">
                            ### Answer No. 2 <br />
                            <span className='font-medium text-lg'>We need to use Node.js </span><br />
                            when we need to work with the backend/server. It means, when we need to work with database, get $ post data from db/server. <br />
                            <span className='font-medium text-lg'>We need to use mongoDB atlas </span><br />
                            when need to store our data, so that we can fetch it anytime we want according to our purpose & need.
                        </div>
                    </div>
                </div>
                <div>
                    <div className="collapse multi-collapse" id="multiCollapseExample1">
                        <div className="block p-6 rounded-lg shadow-lg bg-white">
                            ### Answer No. 3 <br />
                            <span className='font-medium text-lg'>Differences between sql and nosql databases.</span><br />
                            SQL databases are primarily called as Relational Databases (RDBMS) and SQL is the programming language used to interface with relational databases. It stores data in tabular form, Tables with fixed rows and columns.While NoSQL databases are non-relational. Thus, it is not limited to storing data in tables, instead, enables the big data to be stored in the structured, unstructured, semi-structured or polymorphic form.
                        </div>
                    </div>
                </div>
                <div>
                    <div className="collapse multi-collapse" id="multiCollapseExample2">
                        <div className="block p-6 rounded-lg shadow-lg bg-white">
                            ### Answer No. 4 <br />
                            <span className='font-medium text-lg'>The purpose of jwt & How it works</span><br />
                            to share security information between two parties — a client and a server. JWT is a token based stateless authentication mechanism. <br />
                            It works in this way that, Server generates a token that certifies user's identity, and sends it to the client. The client will send the token back to the server for each subsequent request, so the server knows the request comes from a particular identity.
                        </div>
                    </div>
                </div>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Blogs;