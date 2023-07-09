import React from 'react';

import config from '../config/index.json';
import Divider from './Divider';

const Product = () => {
  const { product } = config;
  const [firstItem, secondItem, thirdItem] = product.items;

  return (
    <section className={`bg-background py-8`} id="product">
      <div className={`container max-w-5xl mx-auto m-8`}>
        <h1
          className={`w-full my-2 text-5xl font-bold leading-tight text-center text-primary`}
        >
          {product.title.split(' ').map((word, index) => (
            <span
              key={index}
              className={index % 2 ? 'text-primary' : 'text-border'}
            >
              {word}{' '}
            </span>
          ))}
        </h1>
        <Divider />
        <div className={`flex justify-center flex-wrap mt-20`}>
          <div className={`w-5/6 sm:w-1/2 p-6`}>
            <h3
              className={`text-2xl text-gray-800 font-bold leading-none mb-6`}
            >
              {firstItem?.title}
            </h3>
            <p className={`text-gray-600 whitespace-pre-wrap`}>
              {firstItem?.description}
            </p>
          </div>
          <div
            className={`w-full sm:w-1/2 p-6 flex justify-center items-center rounded-sm overflow-hidden`}
          >
            <img
              className="rounded-lg"
              src={firstItem?.img}
              alt={firstItem?.title}
            />
          </div>
        </div>
        <div className={`flex flex-wrap flex-col-reverse sm:flex-row mt-12`}>
          <div
            className={`w-full sm:w-1/2 p-6 flex justify-center items-center rounded-sm overflow-hidden`}
          >
            <img
              className="rounded-lg"
              src={secondItem?.img}
              alt={secondItem?.title}
            />
          </div>
          <div className={`w-full sm:w-1/2 p-6`}>
            <div className={`align-middle`}>
              <h3
                className={`text-2xl text-gray-800 font-bold leading-none mb-6`}
              >
                {secondItem?.title}
              </h3>
              <p className={`text-gray-600 whitespace-pre-wrap`}>
                {secondItem?.description}
              </p>
            </div>
          </div>
        </div>
        <div className={`flex justify-center flex-wrap mt-20`}>
          <div className={`w-5/6 sm:w-1/2 p-6`}>
            <h3
              className={`text-2xl text-gray-800 font-bold leading-none mb-6`}
            >
              {thirdItem?.title}
            </h3>
            <p className={`text-gray-600 whitespace-pre-wrap`}>
              {thirdItem?.description}
            </p>
          </div>
          <div
            className={`w-full sm:w-1/2 p-6 flex justify-center items-center rounded-sm overflow-hidden`}
          >
            <img
              className="rounded-lg"
              src={thirdItem?.img}
              alt={thirdItem?.title}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Product;
