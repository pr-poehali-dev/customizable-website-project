import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Icon from "@/components/ui/icon";

const Leadership = () => {
  const leaders = [
    {
      name: "Генерал-майор Кузнецов А.П.",
      position: "Начальник военной полиции",
      education: "Военная академия Генерального штаба ВС РФ",
      experience: "25 лет военной службы, военная полиция",
      image:
        "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&h=400&fit=crop&crop=face",
    },
    {
      name: "Полковник Михайлов В.И.",
      position: "Заместитель начальника",
      education: "Военный университет МО РФ, юридический факультет",
      experience: "20 лет службы в органах военной юстиции",
      image:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face",
    },
    {
      name: "Подполковник Волков Д.С.",
      position: "Начальник оперативного отдела",
      education: "Военная академия им. Ф.Э. Дзержинского",
      experience: "18 лет в органах военной полиции",
      image:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face",
    },
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Командование военной полиции
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Опытные офицеры с многолетним стажем военной службы
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {leaders.map((leader, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow">
              <CardHeader className="text-center">
                <div className="mx-auto mb-4">
                  <img
                    src={leader.image}
                    alt={leader.name}
                    className="w-32 h-32 rounded-full object-cover mx-auto"
                  />
                </div>
                <CardTitle className="text-xl">{leader.name}</CardTitle>
                <CardDescription className="text-green-800 font-medium">
                  {leader.position}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex items-start space-x-3">
                    <Icon
                      name="GraduationCap"
                      className="h-5 w-5 text-gray-600 mt-0.5"
                    />
                    <div>
                      <p className="text-sm font-medium text-gray-900">
                        Образование:
                      </p>
                      <p className="text-sm text-gray-600">
                        {leader.education}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <Icon
                      name="Briefcase"
                      className="h-5 w-5 text-gray-600 mt-0.5"
                    />
                    <div>
                      <p className="text-sm font-medium text-gray-900">
                        Опыт работы:
                      </p>
                      <p className="text-sm text-gray-600">
                        {leader.experience}
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Leadership;
