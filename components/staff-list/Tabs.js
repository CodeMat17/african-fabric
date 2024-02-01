"use client";

import { Tab } from "@headlessui/react";
import StaffCard from "./StaffCard";

export const revalidate = 0;

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const Tabs = ({ all, tailors, consultants, beaders, others }) => {
  return (
    <div className='w-full max-w-3xl mx-auto p-8'>
      {/* <pre>{JSON.stringify(others, null, 2)}</pre> */}
      <Tab.Group>
        <Tab.List className='flex flex-col sm:flex-row justify-center rounded-xl sm:rounded-full bg-[#55c694]/20 p-3 sm:p-1 max-w-md mx-auto'>
          <Tab
            className={({ selected }) =>
              classNames(
                "border w-full rounded-xl sm:rounded-full px-2 py-2.5 text-sm font-medium leading-5",
                "ring-white/60 ring-offset-2 ring-offset-[#55c694] focus:outline-none focus:ring-2",
                selected
                  ? "bg-white text-[#55c694] shadow"
                  : "text-gray-500 hover:bg-white/[0.12] hover:text-gray-800"
              )
            }>
            New
          </Tab>
          <Tab
            className={({ selected }) =>
              classNames(
                "border w-full rounded-xl sm:rounded-full px-2 py-2.5 text-sm font-medium leading-5",
                "ring-white/60 ring-offset-2 ring-offset-[#55c694] focus:outline-none focus:ring-2",
                selected
                  ? "bg-white text-[#55c694] shadow"
                  : "text-gray-500 hover:bg-white/[0.12] hover:text-gray-800"
              )
            }>
            Tailors
          </Tab>
          <Tab
            className={({ selected }) =>
              classNames(
                "border w-full rounded-xl sm:rounded-full px-4 py-2.5 text-sm font-medium leading-5",
                "ring-white/60 ring-offset-2 ring-offset-[#55c694] focus:outline-none focus:ring-2",
                selected
                  ? "bg-white text-[#55c694] shadow"
                  : "text-gray-500 hover:bg-white/[0.12] hover:text-gray-800"
              )
            }>
            Consultants
          </Tab>
          <Tab
            className={({ selected }) =>
              classNames(
                "border w-full rounded-xl sm:rounded-full px-4 py-2.5 text-sm font-medium leading-5",
                "ring-white/60 ring-offset-2 ring-offset-[#55c694] focus:outline-none focus:ring-2",
                selected
                  ? "bg-white text-[#55c694] shadow"
                  : "text-gray-500 hover:bg-white/[0.12] hover:text-gray-800"
              )
            }>
            Beaders
          </Tab>
          <Tab
            className={({ selected }) =>
              classNames(
                "border w-full rounded-xl sm:rounded-full px-4 py-2.5 text-sm font-medium leading-5",
                "ring-white/60 ring-offset-2 ring-offset-[#55c694] focus:outline-none focus:ring-2",
                selected
                  ? "bg-white text-[#55c694] shadow"
                  : "text-gray-500 hover:bg-white/[0.12] hover:text-gray-800"
              )
            }>
            Others
          </Tab>
        </Tab.List>
        <Tab.Panels className='mt-2'>
          <Tab.Panel
            className={classNames(
              "rounded-xl bg-white p-3",
              "ring-white/60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2"
            )}>
            <div>
              <div className='relative rounded-xl p-3'>
                <h3 className='font-medium text-lg leading-5 text-center'>
                  New Staff
                </h3>
                {all.length < 1 ? (
                  <p className='text-center py-12 text-red-600'>
                    No new staff at the moment.
                  </p>
                ) : (
                  <>
                    <div className='mt-6 max-w-xs sm:max-w-xl lg:max-w-4xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-8 md:gap-6'>
                      {all.map((user) => (
                        <StaffCard
                          key={user.id}
                          id={user.id}
                          name={user.name}
                          tel={user.tel}
                        />
                      ))}
                    </div>
                  </>
                )}
              </div>
            </div>
          </Tab.Panel>
          <Tab.Panel
            className={classNames(
              "rounded-xl bg-white p-3",
              "ring-white/60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2"
            )}>
            <div>
              <div className='relative rounded-xl p-3'>
                <h3 className='font-medium text-lg leading-5 text-center'>
                  Tailors
                </h3>
                {tailors.length === 0 ? (
                  <p className='text-center py-12 text-red-600'>
                    No registered tailor at the moment.
                  </p>
                ) : (
                  <>
                    <div className='mt-6 max-w-xs sm:max-w-xl lg:max-w-4xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-8 md:gap-6'>
                      {tailors.map((tailor) => (
                        <StaffCard
                          key={tailor.id}
                          id={tailor.id}
                          name={tailor.name}
                          tel={tailor.tel}
                          busy={tailor.busy}
                          assigned_on={tailor.assigned_on}
                          to_finish_on={tailor.to_finish_on}
                        />
                      ))}
                    </div>
                  </>
                )}
              </div>
            </div>
          </Tab.Panel>
          <Tab.Panel
            className={classNames(
              "rounded-xl bg-white p-3",
              "ring-white/60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2"
            )}>
            <div>
              <div className='relative rounded-xl p-3'>
                <h3 className='font-medium text-lg leading-5 text-center'>
                  Consultants
                </h3>
                {consultants.length < 1 ? (
                  <p className='text-center py-12 text-red-600'>
                    No registered consultant at the moment.
                  </p>
                ) : (
                  <>
                    <div className='mt-6 max-w-xs sm:max-w-xl lg:max-w-4xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-8 md:gap-6'>
                      {consultants.map((consult) => (
                        <StaffCard
                          key={consult.id}
                          id={consult.id}
                          name={consult.name}
                          tel={consult.tel}
                          // busy={consult.busy}
                          // assigned_on={consult.assigned_on}
                          // to_finish_on={consult.to_finish_on}
                        />
                      ))}
                    </div>
                  </>
                )}
              </div>
            </div>
          </Tab.Panel>
          <Tab.Panel
            className={classNames(
              "rounded-xl bg-white p-3",
              "ring-white/60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2"
            )}>
            <div>
              <div className='relative rounded-xl p-3'>
                <h3 className='font-medium text-lg leading-5 text-center'>
                  Beaders
                </h3>
                {beaders.length < 1 ? (
                  <p className='text-center py-12 text-red-600'>
                    No registered beader at the moment.
                  </p>
                ) : (
                  <>
                    <div className='mt-6 max-w-xs sm:max-w-xl lg:max-w-4xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-6'>
                      {beaders.map((beader) => (
                        <StaffCard
                          key={beader.id}
                          id={beader.id}
                          name={beader.name}
                          tel={beader.tel}
                          busy={beader.status}
                          // assigned_on={consult.assigned_on}
                          // to_finish_on={consult.to_finish_on}
                        />
                      ))}
                    </div>
                  </>
                )}
              </div>
            </div>
          </Tab.Panel>
          <Tab.Panel
            className={classNames(
              "rounded-xl bg-white p-3",
              "ring-white/60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2"
            )}>
            <div>
              <div className='relative rounded-xl p-3'>
                <h3 className='font-medium leading-5 text-center'>Others</h3>
                {others.length < 1 ? (
                  <p className='text-center py-12 text-red-600'>
                    No OTHER staff at the moment.
                  </p>
                ) : (
                  <>
                    <div className='mt-6 max-w-xs sm:max-w-xl lg:max-w-4xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-8 md:gap-6'>
                      {others.map((other) => (
                        <StaffCard
                          key={other.id}
                          id={other.id}
                          name={other.name}
                          tel={other.tel}
                          position={other.position}
                          // assigned_on={consult.assigned_on}
                          // to_finish_on={consult.to_finish_on}
                        />
                      ))}
                    </div>
                  </>
                )}
              </div>
            </div>
          </Tab.Panel>
        </Tab.Panels>
      </Tab.Group>
    </div>
  );
};

export default Tabs;
