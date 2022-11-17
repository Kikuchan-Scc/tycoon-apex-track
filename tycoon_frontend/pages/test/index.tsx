import React from 'react';
import { GetServerSideProps, InferGetServerSidePropsType } from 'next';

export const getServerSideProps: GetServerSideProps = async () => {
    return {
        props: {
            results: [1, 2, 3],
        },
    };
};

function Test({ results }: InferGetServerSidePropsType<typeof getServerSideProps>) {
    console.log(results)
    return (
        <div></div>
    )
}

export default Test;