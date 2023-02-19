import React from 'react';
import { Tab, TabList, TabPanel, Tabs } from 'react-tabs';
import Review from './Review';

const DescriptionAndReview = () => {
  return (
    <Tabs className=" flex flex-col gap-5">
      <TabList className="flex items-center justify-center gap-5 text-xl flex-wrap text-slate-900">
        <Tab
          selectedClassName="text-[slate-900] border-b-2 border-slate-900"
          className=" px-3 py-1 focus:outline-none cursor-pointer"
        >
          Description
        </Tab>
        <Tab
          selectedClassName="text-[slate-900] border-b-2 border-slate-900"
          className=" px-3 py-1 focus:outline-none cursor-pointer"
        >
          Additional Information
        </Tab>
        <Tab
          selectedClassName="text-[slate-900] border-b-2 border-slate-900"
          className=" px-3 py-1 focus:outline-none cursor-pointer"
        >
          Shipping and Returns
        </Tab>
        <Tab
          selectedClassName="text-[slate-900] border-b-2 border-slate-900"
          className=" px-3 py-1 focus:outline-none cursor-pointer"
        >
          Reviews
        </Tab>
      </TabList>
      <TabPanel>
        <div className="border p-5 rounded-md space-y-2 text-gray-600">
          <h1 className="text-xl font-semibold">Product Information</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error eius
            at a tempore optio necessitatibus esse unde praesentium qui,
            nesciunt alias voluptatum exercitationem non eaque, quasi dolore!
            Obcaecati veniam aliquam eaque dolorum consequuntur eveniet vitae
            sapiente, dolor magnam quos earum hic iusto. Eligendi reiciendis,
            omnis saepe pariatur minima nam voluptatem!
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo
            ipsa voluptas commodi consequatur sed repellat accusantium nostrum
            autem? Molestiae consequatur deleniti ullam ex vitae illo nulla
            accusamus omnis reprehenderit accusantium?
          </p>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Facilis
            ipsum tempora et explicabo voluptatibus illum repellat adipisci quia
            eius saepe.
          </p>
        </div>
      </TabPanel>
      <TabPanel>
        <div className="border p-5 rounded-md space-y-2 text-gray-600">
          <h1 className="text-xl font-semibold">Additional Information</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error eius
            at a tempore optio necessitatibus esse unde praesentium qui,
            nesciunt alias voluptatum exercitationem non eaque, quasi dolore!
            Obcaecati veniam aliquam eaque dolorum consequuntur eveniet vitae
            sapiente, dolor magnam quos earum hic iusto. Eligendi reiciendis,
            omnis saepe pariatur minima nam voluptatem!
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo
            ipsa voluptas commodi consequatur sed repellat accusantium nostrum
            autem? Molestiae consequatur deleniti ullam ex vitae illo nulla
            accusamus omnis reprehenderit accusantium?
          </p>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Facilis
            ipsum tempora et explicabo voluptatibus illum repellat adipisci quia
            eius saepe.
          </p>
        </div>
      </TabPanel>
      <TabPanel>
        <div className="border p-5 rounded-md space-y-2 text-gray-600">
          <h1 className="text-xl font-semibold">Shipping and Returns</h1>
          <p>
            We deliver to over 100 countries around the world. For full details
            of the delivery options we offer, please view our Delivery
            information We hope you’ll love every purchase, but if you ever need
            to return an item you can do so within a month of receipt. For full
            details of how to make a return, please view our Returns information
          </p>
        </div>
      </TabPanel>
      <TabPanel>
        <div className="border p-5 rounded-md space-y-2 text-gray-600">
          <h1 className="text-xl font-semibold">Review(2)</h1>
          <Review />
          <hr />
          <Review />
          <br />
          <button className=" bg-slate-900/5 text-slate-900 font-semibold border border-slate-900 all hover:bg-slate-900 hover:text-white px-4 py-2 rounded-md text-base">
            Add Your Review
          </button>
        </div>
      </TabPanel>
    </Tabs>
  );
};

export default DescriptionAndReview;
