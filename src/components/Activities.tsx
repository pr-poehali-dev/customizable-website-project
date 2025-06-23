import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Icon from "@/components/ui/icon";

const Activities = () => {
  const activities = [
    {
      icon: "Laptop",
      title: "Цифровизация госуслуг",
      description:
        "Разработка и внедрение цифровых государственных услуг для граждан и бизнеса",
    },
    {
      icon: "Shield",
      title: "Информационная безопасность",
      description:
        "Обеспечение защиты государственных информационных систем и персональных данных",
    },
    {
      icon: "Database",
      title: "Управление данными",
      description:
        "Создание единой системы управления государственными данными и их аналитика",
    },
    {
      icon: "Network",
      title: "Цифровая инфраструктура",
      description:
        "Развитие и поддержание цифровой инфраструктуры государственного сектора",
    },
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Основные направления деятельности
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Реализуем стратегические инициативы по цифровому развитию
            государства
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {activities.map((activity, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow">
              <CardHeader className="text-center">
                <div className="mx-auto mb-4 w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center">
                  <Icon
                    name={activity.icon}
                    className="h-8 w-8 text-blue-800"
                  />
                </div>
                <CardTitle className="text-lg">{activity.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-center">
                  {activity.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Activities;
