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
            <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mx-10 mb-10 md:mx-40">
                <div>
                    <div class="collapse multi-collapse" id="multiCollapseExample1">
                        <div class="block p-6 rounded-lg shadow-lg bg-white">
                            Answer No. $ <br />
                            Some placeholder content for the first collapse component of this multi-collapse example. This panel is hidden by default but revealed when the user activates the relevant trigger.
                        </div>
                    </div>
                </div>
                <div>
                    <div class="collapse multi-collapse" id="multiCollapseExample2">
                        <div class="block p-6 rounded-lg shadow-lg bg-white">
                            Answer No. $ <br />
                            Some placeholder content for the second collapse component of this multi-collapse example. This panel is hidden by default but revealed when the user activates the relevant trigger.
                        </div>
                    </div>
                </div>
                <div>
                    <div class="collapse multi-collapse" id="multiCollapseExample1">
                        <div class="block p-6 rounded-lg shadow-lg bg-white">
                            Answer No. $ <br />
                            Some placeholder content for the first collapse component of this multi-collapse example. This panel is hidden by default but revealed when the user activates the relevant trigger.
                        </div>
                    </div>
                </div>
                <div>
                    <div class="collapse multi-collapse" id="multiCollapseExample2">
                        <div class="block p-6 rounded-lg shadow-lg bg-white">
                            Answer No. $ <br />
                            Some placeholder content for the second collapse component of this multi-collapse example. This panel is hidden by default but revealed when the user activates the relevant trigger.
                        </div>
                    </div>
                </div>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Blogs;