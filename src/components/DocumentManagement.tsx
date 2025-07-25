import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const DocumentManagement = () => {
  const documents = [
    {
      title: "Устав военной полиции ВС РФ",
      description:
        "Основной документ, регламентирующий деятельность военной полиции",
      date: "2023-12-15",
      type: "Устав",
    },
    {
      title: "Инструкция по дознанию",
      description:
        "Порядок проведения дознания по преступлениям против военной службы",
      date: "2023-11-28",
      type: "Инструкция",
    },
    {
      title: "Регламент охраны объектов",
      description:
        "Административный регламент охраны и защиты военных объектов",
      date: "2023-11-20",
      type: "Регламент",
    },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Нормативные документы
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Уставы, инструкции и регламенты военной полиции
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <div className="space-y-4">
              {documents.map((doc, index) => (
                <Card key={index} className="hover:shadow-md transition-shadow">
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <div>
                        <CardTitle className="text-lg mb-2">
                          {doc.title}
                        </CardTitle>
                        <CardDescription className="mb-2">
                          {doc.description}
                        </CardDescription>
                        <div className="flex items-center space-x-4 text-sm text-gray-500">
                          <span>{doc.date}</span>
                          <span className="px-2 py-1 bg-green-100 text-green-800 rounded-full">
                            {doc.type}
                          </span>
                        </div>
                      </div>
                      <Button variant="outline" size="sm">
                        <Icon name="Download" className="h-4 w-4 mr-2" />
                        Скачать
                      </Button>
                    </div>
                  </CardHeader>
                </Card>
              ))}
            </div>
          </div>

          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Icon name="Search" className="h-5 w-5 mr-2" />
                  Поиск документов
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <input
                    type="text"
                    placeholder="Поиск по названию или номеру"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                  <select className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500">
                    <option>Все типы документов</option>
                    <option>Устав</option>
                    <option>Инструкция</option>
                    <option>Регламент</option>
                  </select>
                  <Button className="w-full">Найти</Button>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Icon name="Bell" className="h-5 w-5 mr-2" />
                  Уведомления
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="p-3 bg-green-50 rounded-md">
                    <p className="text-sm font-medium text-green-900">
                      Новый документ
                    </p>
                    <p className="text-xs text-green-700">
                      Опубликована инструкция №2023-45
                    </p>
                  </div>
                  <div className="p-3 bg-gray-50 rounded-md">
                    <p className="text-sm font-medium text-gray-900">
                      Обновление
                    </p>
                    <p className="text-xs text-gray-700">
                      Изменения в стратегии развития
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DocumentManagement;
