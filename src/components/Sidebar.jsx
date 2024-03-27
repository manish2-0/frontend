import React, { Component, Fragment, useEffect, useState } from "react";
import { Transition, Dialog, Menu } from "@headlessui/react";
import {
  Cog6ToothIcon,
  ComputerDesktopIcon,
  HomeIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import {
  Bars3Icon,
  CalendarIcon,
  ChartPieIcon,
  DeviceTabletIcon,
  FolderMinusIcon,
  GlobeAltIcon,
} from "@heroicons/react/20/solid";
import { useLocation } from "react-router-dom";
const Sidebar = ({}) => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [isSidebarCollapsed, setSidebarCollapsed] = useState(true);
  const location = useLocation();
  const parts = location.pathname.split("/");
  const pageRoute = parts[1];

  const navigationData = [
    {
      name: "Home",
      href: "/admin/admindashboard",
      icon: HomeIcon,
      current: true,
    },
    {
      name: "History",
      href: "/admin/history",
      icon: GlobeAltIcon,
      current: false,
    },
    {
      name: "Device List",
      href: "/admin/device-list",
      icon: DeviceTabletIcon,
      current: false,
    },
    {
      name: "Forms",
      href: "/admin/forms",
      icon: FolderMinusIcon,
      current: false,
    },

    { name: "Users", href: "/users", icon: ChartPieIcon, current: false },
    {
      name: "Appointments",
      href: "/admin/appointments",
      icon: CalendarIcon,
      current: false,
    },
  ];

  const [navigation, setNavigation] = useState(null);
  useEffect(() => {
    const ndata = navigationData.map((item) => {
      if (item.href === `/${pageRoute}`) {
        item.current = true;
        return item;
      } else {
        item.current = false;
        return item;
      }
    });
    setNavigation(ndata);
  }, [pageRoute]);

  // const features = [
  //   {
  //     name: "Accessibility",
  //     href: "#",
  //     icon: EllipsisHorizontalIcon,
  //     current: true,
  //   },
  //   {
  //     name: "Social Media",
  //     href: "#",
  //     icon: ComputerDesktopIcon,
  //     current: false,
  //   },
  //   {
  //     name: "Contact",
  //     href: "#",
  //     icon: ChatBubbleBottomCenterIcon,
  //     current: false,
  //   },
  // ];

  const onClick = (item) => {
    setNavigation((prev) => {
      const data = prev.map((previtem) => {
        if (previtem.name === item.name) {
          previtem.current = true;
        } else {
          previtem.current = false;
        }
        return previtem;
      });
      return data;
    });
  };

  const toggleSidebar = () => {
    setSidebarCollapsed((prev) => !prev);
  };

  function classNames(...classes) {
    return classes.filter(Boolean).join(" ");
  }

  return (
    <>
      <div>
        <Transition.Root show={sidebarOpen} as={Fragment}>
          <Dialog
            as="div"
            className="relative z-20 lg:hidden"
            onClose={setSidebarOpen}
          >
            <Transition.Child
              as={Fragment}
              enter="transition-opacity ease-linear duration-500"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="transition-opacity ease-linear duration-500"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <div className="fixed inset-0 bg-gray-900/80" />
            </Transition.Child>

            <div className="fixed inset-0 flex">
              <Transition.Child
                as={Fragment}
                enter="transition ease-in-out duration-500 transform"
                enterFrom="-translate-x-full"
                enterTo="translate-x-0"
                leave="transition ease-in-out duration-500 transform"
                leaveFrom="translate-x-0"
                leaveTo="-translate-x-full"
              >
                <Dialog.Panel className="relative mr-16 flex w-full max-w-xs flex-1">
                  <Transition.Child
                    as={Fragment}
                    enter="ease-in-out duration-300"
                    enterFrom="opacity-0"
                    enterTo="opacity-100"
                    leave="ease-in-out duration-300"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                  >
                    <div className="absolute left-full top-0 flex w-16 justify-center pt-5 z-50">
                      <button
                        type="button"
                        className="-m-2.5 p-2.5"
                        onClick={() => setSidebarOpen(false)}
                      >
                        <span className="sr-only">Close sidebar</span>
                        <XMarkIcon
                          className="h-6 w-6 text-white"
                          aria-hidden="true"
                        />
                      </button>
                    </div>
                  </Transition.Child>
                  {/* Sidebar component, swap this element with another sidebar if you like */}
                  <div className="flex grow flex-col gap-y-5 overflow-y-auto bg-gray-900 px-6 pb-4 ring-1 ring-white/10 ">
                    <div className="flex h-16 shrink-0 items-center">
                      <a href="/">
                        <img
                          className="h-8 w-auto"
                          //   src={SpotlaunchLogo}
                          alt="Your Company"
                        />
                      </a>
                    </div>
                    <nav
                      className="flex flex-1 flex-col"
                      onClick={() => setSidebarOpen(false)}
                    >
                      <div role="list" className="flex flex-1 flex-col gap-y-7">
                        <div>
                          <div role="list" className="-mx-2 space-y-1">
                            {navigation &&
                              navigation.map((item) => (
                                <div
                                  key={item.name}
                                  onClick={() => onClick(item)}
                                >
                                  <a
                                    href={item.href}
                                    className={classNames(
                                      item.current
                                        ? "bg-gray-800 text-white "
                                        : "text-gray-400 hover:text-white hover:bg-gray-800 ",
                                      "group flex gap-x-3 rounded-md p-2 text-sm leading-6 font-semibold no-underline "
                                    )}
                                  >
                                    <item.icon
                                      className={`h-6 w-6 shrink-0 `}
                                      aria-hidden="true"
                                    />
                                    <div
                                      className={`duration-700  ${
                                        !isSidebarCollapsed &&
                                        "scale-0 translate-x-full"
                                      }`}
                                    >
                                      {item.name}
                                    </div>
                                  </a>
                                </div>
                              ))}
                          </div>
                        </div>
                        {/* <li>
                          <div role="list" className="-mx-2 space-y-1">
                            <div className="text-xs font-semibold leading-6 text-gray-400">
                              {" "}
                              Plugins
                            </div>
                            {features.map((item) => (
                              <li key={item.name}>
                                <a
                                  href={item.href}
                                  className={classNames(
                                    item.current
                                      ? "bg-gray-800 text-white"
                                      : "text-gray-400 hover:text-white hover:bg-gray-800",
                                    "group flex gap-x-3 rounded-md p-2 text-sm leading-6 font-semibold"
                                  )}
                                >
                                  <item.icon
                                    className="h-6 w-6 shrink-0"
                                    aria-hidden="true"
                                  />
                                  {item.name}
                                </a>
                              </li>
                            ))}
                          </div>
                        </li> */}

                        <div className="mt-auto">
                          <a
                            href="/settings"
                            className="group -mx-2 flex gap-x-3 rounded-md p-2 text-sm font-semibold leading-6 text-gray-400 hover:bg-gray-800 hover:text-white no-underline"
                          >
                            <Cog6ToothIcon
                              className="h-6 w-6 shrink-0"
                              aria-hidden="true"
                            />
                            Settings
                          </a>
                        </div>
                        <div className="-mx-6 ">
                          <a
                            href="/profile"
                            className="flex items-center gap-x-4 px-6 py-3 text-sm font-semibold leading-6 no-underline text-white hover:bg-gray-50"
                          >
                            <img
                              className="h-8 w-8 rounded-full bg-gray-50"
                              src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                              alt="profilelogo"
                            />
                            <span className="sr-only">Your profile</span>
                            <span aria-hidden="true">Tom Cook</span>
                          </a>
                        </div>
                      </div>
                    </nav>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </Dialog>
        </Transition.Root>

        {/* Static sidebar for desktop */}
        <div
          className={`hidden lg:fixed lg:inset-y-0 lg:left-0 lg:z-50 lg:block duration-300   lg:bg-gray-900 ${
            isSidebarCollapsed ? "lg:w-72" : "lg:w-20"
          }`}
        >
          {/* Sidebar component, swap this element with another sidebar if you like */}
          <div
            className={`lg:flex lg:flex-col h-full transform transition-transform ease-in-out duration-700 `}
          >
            <div
              className={`flex grow flex-col gap-y-5  bg-gray-900 px-6 pb-4 `}
            >
              <div className={`flex h-16 shrink-0 items-center `}>
                <a className="flex space-x-3 no-underline" href="/">
                  <img
                    className={` h-8 w-auto cursor-pointer
                  }`}
                    // src={SpotlaunchLogo}
                    alt="Logo"
                  />
                  <div
                    className={`text-white font-bold ${
                      !isSidebarCollapsed && "scale-0"
                    }`}
                  >
                    Rony Buys iPhone 
                  </div>
                </a>
              </div>

              {/* <div
                className={` cursor-pointer rounded-full `}
                onClick={toggleSidebar}
              >
                <ArrowLeftCircleIcon
                  className={`absolute top-3 -right-6  w-9 rounded-full text-white bg-black ${
                    !isSidebarCollapsed && "rotate-180"
                  }`}
                />
              </div> */}
              <nav className={`flex flex-1 flex-col `}>
                <div role="list" className={`flex flex-1 flex-col gap-y-4 `}>
                  <div role="list" className="-mx-2 space-y-1">
                    <div
                      className={`text-xs font-semibold leading-6 text-gray-400 ${
                        !isSidebarCollapsed && "scale-0"
                      }`}
                    >
                      {" "}
                      Admin Panel
                    </div>

                    {navigation &&
                      navigation.map((item) => (
                        <div key={item.name} onClick={() => onClick(item)}>
                          <a
                            href={item.href}
                            className={classNames(
                              item.current
                                ? "bg-gray-800 text-white "
                                : "text-gray-400 hover:text-white hover:bg-gray-800 ",
                              "group flex gap-x-3 rounded-md p-2 text-sm leading-6 font-semibold no-underline "
                            )}
                          >
                            <item.icon
                              className={`h-6 w-6 shrink-0 `}
                              aria-hidden="true"
                            />
                            <div
                              className={`duration-700  ${
                                !isSidebarCollapsed &&
                                "scale-0 translate-x-full"
                              }`}
                            >
                              {item.name}
                            </div>
                          </a>
                        </div>
                      ))}
                  </div>

                  {/* <ul role="list" className="-mx-2 space-y-1">
                      <div className="text-xs font-semibold leading-6 text-gray-400">
                        {" "}
                        Plugins
                      </div>
                      {features.map((item) => (
                        <li key={item.name}>
                          <a
                            href={item.href}
                            className={classNames(
                              item.current
                                ? "bg-gray-800 text-white"
                                : "text-gray-400 hover:text-white hover:bg-gray-800",
                              "group flex gap-x-3 rounded-md p-2 text-sm leading-6 font-semibold"
                            )}
                          >
                            <item.icon
                              className="h-6 w-6 shrink-0"
                              aria-hidden="true"
                            />
                            {item.name}
                          </a>
                        </li>
                      ))}
                    </ul> */}

                  {/* <li>
                <div className="text-xs font-semibold leading-6 text-gray-400">Your teams</div>
                <ul role="list" className="-mx-2 mt-2 space-y-1">
                  {teams.map((team) => (
                    <li key={team.name}>
                      <a
                        href={team.href}
                        className={classNames(
                          team.current
                            ? 'bg-gray-800 text-white'
                            : 'text-gray-400 hover:text-white hover:bg-gray-800',
                          'group flex gap-x-3 rounded-md p-2 text-sm leading-6 font-semibold'
                        )}
                      >
                        <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-lg border border-gray-700 bg-gray-800 text-[0.625rem] font-medium text-gray-400 group-hover:text-white">
                          {team.initial}
                        </span>
                        <span className="truncate">{team.name}</span>
                      </a>
                    </li>
                  ))}
                </ul>
              </li> */}
                </div>
              </nav>
            </div>
          </div>
        </div>

        <div className={` ${isSidebarCollapsed ? "lg:pl-72" : "lg:pl-20"}`}>
          <div className="lg:hidden sticky top-0 lg:z-20 flex h-16 shrink-0 items-center gap-x-4 border-b border-gray-200 bg-white px-4 shadow-sm sm:gap-x-6 sm:px-6 lg:px-8 z-10">
            <button
              type="button"
              className="-m-2.5 p-2.5 text-gray-700 z-50 lg:hidden"
              onClick={() => setSidebarOpen(true)}
            >
              <span className="sr-only">Open sidebar</span>
              <Bars3Icon className="h-6 w-6" aria-hidden="true" />
            </button>

            <div
              className="h-6 w-px bg-gray-900/10 lg:hidden"
              aria-hidden="true"
            />

            {/* <div className="flex flex-1 gap-x-4  lg:gap-x-6 ">
              <form className="relative flex flex-1" action="#" method="GET">
                <label htmlFor="search-field" className="sr-only">
                  Search
                </label>
                <MagnifyingGlassIcon
                  className="pointer-events-none absolute  left-2 h-full w-5 text-gray-400"
                  aria-hidden="true"
                />
                <input
                  id="search-field"
                  className="block w-full border-2 border-gray-500 py-0 pl-8 pr-0 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm"
                  placeholder="Search..."
                  type="search"
                  name="search"
                />
              </form>
              <div className="flex items-center gap-x-4 lg:gap-x-6">
                <button
                  type="button"
                  className="-m-2.5 p-2.5 text-gray-400 hover:text-gray-500"
                >
                  <span className="sr-only">View notifications</span>
                  <BellIcon className="h-6 w-6" aria-hidden="true" />
                </button>

             
                <div
                  className="hidden lg:block lg:h-6 lg:w-px lg:bg-gray-900/10"
                  aria-hidden="true"
                />

              
                <Menu as="div" className="relative inline-block text-left">
                  <div>
                    <Menu.Button className="inline-flex w-full justify-center gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50">
                      Sign in
                      <ChevronDownIcon
                        className="-mr-1 h-5 w-5 text-gray-400"
                        aria-hidden="true"
                      />
                    </Menu.Button>
                  </div>

                  <Transition
                    as={Fragment}
                    enter="transition ease-out duration-100"
                    enterFrom="transform opacity-0 scale-95"
                    enterTo="transform opacity-100 scale-100"
                    leave="transition ease-in duration-75"
                    leaveFrom="transform opacity-100 scale-100"
                    leaveTo="transform opacity-0 scale-95"
                  >
                    <Menu.Items className="absolute right-0 z-10 mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                      <div className="px-4 py-3">
                        <p className="text-sm">Signed in as</p>
                        <p className="truncate text-sm font-medium text-gray-900">
                          tom@example.com
                        </p>
                      </div>
                      <div className="py-1">
                        <Menu.Item>
                          {({ active }) => (
                            <a
                              href="#"
                              className={classNames(
                                active
                                  ? "bg-gray-100 text-gray-900"
                                  : "text-gray-700",
                                "block px-4 py-2 text-sm"
                              )}
                            >
                              Account settings
                            </a>
                          )}
                        </Menu.Item>
                        <Menu.Item>
                          {({ active }) => (
                            <a
                              href="#"
                              className={classNames(
                                active
                                  ? "bg-gray-100 text-gray-900"
                                  : "text-gray-700",
                                "block px-4 py-2 text-sm"
                              )}
                            >
                              Support
                            </a>
                          )}
                        </Menu.Item>
                        <Menu.Item>
                          {({ active }) => (
                            <a
                              href="#"
                              className={classNames(
                                active
                                  ? "bg-gray-100 text-gray-900"
                                  : "text-gray-700",
                                "block px-4 py-2 text-sm"
                              )}
                            >
                              License
                            </a>
                          )}
                        </Menu.Item>
                      </div>
                      <div className="py-1">
                        <form method="POST" action="#">
                          <Menu.Item>
                            {({ active }) => (
                              <button
                                type="submit"
                                className={classNames(
                                  active
                                    ? "bg-gray-100 text-gray-900"
                                    : "text-gray-700",
                                  "block w-full px-4 py-2 text-left text-sm"
                                )}
                              >
                                Sign out
                              </button>
                            )}
                          </Menu.Item>
                        </form>
                      </div>
                    </Menu.Items>
                  </Transition>
                </Menu>
              </div>
            </div> */}
          </div>
          <div></div>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
