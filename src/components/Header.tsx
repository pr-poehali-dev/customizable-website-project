import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import Icon from "@/components/ui/icon";

const Header = () => {
  return (
    <header className="bg-gray-900 border-b border-gray-700 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-3">
              <Icon name="Shield" className="h-8 w-8 text-green-400" />
              <div>
                <h1 className="text-xl font-bold text-white">
                  Сайт Вооруженных сил Нижегородский области{" "}
                </h1>
                <p className="text-sm text-gray-300">Нижегородск</p>
              </div>
            </div>
          </div>

          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuLink
                  className={`${navigationMenuTriggerStyle()} text-gray-300 hover:text-white hover:bg-gray-800`}
                >
                  Главная
                </NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink
                  className={`${navigationMenuTriggerStyle()} text-gray-300 hover:text-white hover:bg-gray-800`}
                >
                  Служба
                </NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink
                  className={`${navigationMenuTriggerStyle()} text-gray-300 hover:text-white hover:bg-gray-800`}
                >
                  Уставы
                </NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink
                  className={`${navigationMenuTriggerStyle()} text-gray-300 hover:text-white hover:bg-gray-800`}
                >
                  Командование
                </NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink
                  className={`${navigationMenuTriggerStyle()} text-gray-300 hover:text-white hover:bg-gray-800`}
                >
                  Контакты
                </NavigationMenuLink>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </div>
      </div>
    </header>
  );
};

export default Header;
