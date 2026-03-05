import { Bars3Icon, XMarkIcon } from "@heroicons/react/16/solid";
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
    // {
    //   label: "Services",
    //   items: services.map((service) => ({
    //     label: service.data.title,
    //     to: `/services/${service.id}`,
    //   })),
    // },
    { label: "Contact", to: "/#contact" },
  ];

  return (
    <Disclosure as="nav" className="relative bg-gray-200">
      <div className="container flex justify-between items-center py-4">
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
          <div className="flex space-x-6">
            {navItems.map((item) =>
              item.items ? (
                <Menu as="div" key={item.label}>
                  <MenuButton className="text-tertiary hover:text-primary hover:font-bold uppercase font-medium">
                    {item.label}
                  </MenuButton>
                  <MenuItems transition className="absolute transition">
                    {item.items.map((childItem) => (
                      <MenuItem key={childItem.label}>
                        <a
                          href={childItem.to}
                          className="block px-4 py-2 text-tertiary hover:text-primary uppercase font-medium"
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
          {navItems.map((item) => (
            <DisclosureButton
              key={item.label}
              as="a"
              href={item.to}
              className="px-4 py-3 text-tertiary hover:text-primary hover:bg-gray-300 uppercase font-medium text-sm"
            >
              {item.label}
            </DisclosureButton>
          ))}
        </div>
      </DisclosurePanel>
    </Disclosure>
  );
}
