import { Bars3Icon, XMarkIcon, ChevronDownIcon } from "@heroicons/react/16/solid";
import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
  Menu,
  MenuItems,
  MenuButton,
  MenuItem,
} from "@headlessui/react";

export function Navbar({ services }) {
  const navItems = [
    { label: "Home", to: "/" },
    { label: "About Us", to: "/about" },
    {
      label: "Services",
      items: services.map((service) => ({
        label: service.data.title,
        to: `/services/${service.id}`,
      })),
    },
    { label: "Contact", to: "/#contact" },
  ];

  return (
    <Disclosure as="nav" className="relative bg-gray-200">
      <div className="container flex justify-between items-center py-4 px-4">
        <a href="/">
          <img
            src="/logo.png"
            width="192px"
            height="54px"
            alt="WA Dash Logo"
            className="w-48"
          />
        </a>

        <div className="sm:hidden">
          <DisclosureButton className="group relative text-tertiary hover:text-primary p-1">
            <span className="sr-only">Open main menu</span>
            <Bars3Icon
              aria-hidden="true"
              className="block size-6 group-data-open:hidden"
            />
            <XMarkIcon
              aria-hidden="true"
              className="hidden size-6 group-data-open:block"
            />
          </DisclosureButton>
        </div>

        <div className="hidden sm:block">
          <div className="flex space-x-6 items-center">
            {navItems.map((item) =>
              item.items ? (
                <Menu as="div" key={item.label} className="relative">
                  <MenuButton className="flex items-center gap-1 text-tertiary hover:text-primary uppercase font-medium">
                    {item.label}
                    <ChevronDownIcon className="size-4 ui-open:rotate-180 transition-transform" />
                  </MenuButton>
                  <MenuItems
                    transition
                    className="absolute top-full right-0 mt-2 w-56 bg-white rounded-lg shadow-lg py-1 z-50 transition data-closed:opacity-0 data-closed:scale-95 origin-top-right"
                  >
                    {item.items.map((childItem) => (
                      <MenuItem key={childItem.label}>
                        <a
                          href={childItem.to}
                          className="block px-4 py-2 text-tertiary hover:text-primary hover:bg-gray-50 font-medium text-sm"
                        >
                          {childItem.label}
                        </a>
                      </MenuItem>
                    ))}
                  </MenuItems>
                </Menu>
              ) : (
                <a
                  key={item.label}
                  href={item.to}
                  className="text-tertiary hover:text-primary uppercase font-medium"
                >
                  {item.label}
                </a>
              ),
            )}
          </div>
        </div>
      </div>

      <DisclosurePanel className="sm:hidden border-t border-gray-300">
        <div className="flex flex-col py-2">
          {navItems.map((item) =>
            item.items ? (
              <div key={item.label}>
                <p className="px-4 py-2 text-tertiary uppercase font-medium text-sm opacity-50 text-xs tracking-wider">
                  {item.label}
                </p>
                {item.items.map((childItem) => (
                  <DisclosureButton
                    key={childItem.label}
                    as="a"
                    href={childItem.to}
                    className="block pl-8 pr-4 py-2 text-tertiary hover:text-primary hover:bg-gray-300 font-medium text-sm"
                  >
                    {childItem.label}
                  </DisclosureButton>
                ))}
              </div>
            ) : (
              <DisclosureButton
                key={item.label}
                as="a"
                href={item.to}
                className="px-4 py-3 text-tertiary hover:text-primary hover:bg-gray-300 uppercase font-medium text-sm"
              >
                {item.label}
              </DisclosureButton>
            ),
          )}
        </div>
      </DisclosurePanel>
    </Disclosure>
  );
}
