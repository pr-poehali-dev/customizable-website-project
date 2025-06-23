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
      icon: "Scale",
      title: "Военная дисциплина",
      description:
        "Контроль соблюдения воинской дисциплины и порядка в воинских частях",
    },
    {
      icon: "Shield",
      title: "Охрана правопорядка",
      description:
        "Обеспечение законности и правопорядка на территории военных объектов",
    },
    {
      icon: "Search",
      title: "Расследование преступлений",
      description:
        "Дознание и расследование преступлений против военной службы",
    },
    {
      icon: "Lock",
      title: "Обеспечение безопасности",
      description:
        "Охрана и защита военных объектов, контроль режима секретности",
    },
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Основные функции военной полиции
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Выполняем задачи по поддержанию правопорядка в Вооруженных Силах
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {activities.map((activity, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow">
              <CardHeader className="text-center">
                <div className="mx-auto mb-4 w-16 h-16 bg-green-100 rounded-full flex items-center justify-center">
                  <Icon
                    name={activity.icon}
                    className="h-8 w-8 text-green-800"
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
