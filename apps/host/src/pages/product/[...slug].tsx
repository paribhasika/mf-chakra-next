import { GetServerSideProps } from 'next/types';

import dynamic from 'next/dynamic';
import React, { Suspense, lazy } from 'react';

// @ts-ignore

const ProductDetailsPage = lazy(() => import('products/pdp'));

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  // @ts-ignore
  const plp = await import('products/pdp');
  if (plp.getServerSideProps) {
    const pdpProps = await Promise.resolve(plp.getServerSideProps(ctx));
    return {
      props: pdpProps.props,
    };
  }

  return {
    props: {},
  };
};

export default ProductDetailsPage;
