import Icon from "@/components/ui/icon";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center space-x-3 mb-4">
              <Icon name="Building2" className="h-8 w-8 text-blue-400" />
              <div>
                <h3 className="text-xl font-bold">
                  Министерство Цифрового Развития
                </h3>
                <p className="text-gray-400">Российская Федерация</p>
              </div>
            </div>
            <p className="text-gray-400 text-sm">
              Федеральный орган исполнительной власти, осуществляющий функции по
              выработке и реализации государственной политики в сфере цифрового
              развития.
            </p>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">
              Контактная информация
            </h4>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Icon name="MapPin" className="h-5 w-5 text-blue-400" />
                <span className="text-sm">
                  125993, Москва, Тверская ул., д. 7
                </span>
              </div>
              <div className="flex items-center space-x-3">
                <Icon name="Phone" className="h-5 w-5 text-blue-400" />
                <span className="text-sm">+7 (495) 123-45-67</span>
              </div>
              <div className="flex items-center space-x-3">
                <Icon name="Mail" className="h-5 w-5 text-blue-400" />
                <span className="text-sm">info@digital.gov.ru</span>
              </div>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Полезные ссылки</h4>
            <div className="space-y-2">
              <a
                href="#"
                className="block text-sm text-gray-400 hover:text-white transition-colors"
              >
                Госуслуги
              </a>
              <a
                href="#"
                className="block text-sm text-gray-400 hover:text-white transition-colors"
              >
                Единый портал госзакупок
              </a>
              <a
                href="#"
                className="block text-sm text-gray-400 hover:text-white transition-colors"
              >
                Федеральный реестр НПА
              </a>
              <a
                href="#"
                className="block text-sm text-gray-400 hover:text-white transition-colors"
              >
                Открытые данные
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-sm text-gray-400">
            © 2023 Министерство Цифрового Развития Российской Федерации. Все
            права защищены.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
