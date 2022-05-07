import React from 'react';

const Loading = () => {
    return (
        <div class="flex justify-center">
            <div class="spinner-border animate-spin w-4 h-4 rounded-full" role="status">
                <span class="visually-hidden">Loading...</span>
            </div>
        </div>
    );
};

export default Loading;