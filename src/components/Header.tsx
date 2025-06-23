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
    <header className="bg-white border-b border-gray-200 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-3">
              <Icon name="Building2" className="h-8 w-8 text-blue-800" />
              <div>
                <h1 className="text-xl font-bold text-gray-900">
                  Министерство Цифрового Развития
                </h1>
                <p className="text-sm text-gray-600">Российская Федерация</p>
              </div>
            </div>
          </div>

          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                  Главная
                </NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                  Деятельность
                </NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                  Документы
                </NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                  Руководство
                </NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
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
