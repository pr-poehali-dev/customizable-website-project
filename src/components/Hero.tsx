import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const Hero = () => {
  return (
    <section className="bg-gradient-to-r from-green-800 to-gray-900 text-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Вооруженные силы{" "}
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-green-100 max-w-3xl mx-auto">
            Обеспечиваем правопорядок в Вооруженных Силах, соблюдение воинской
            дисциплины и безопасность военных объектов Российской Федерации
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-white text-green-800 hover:bg-gray-100"
            >
              <Icon name="FileText" className="mr-2" />
              Уставы и инструкции
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-green-800"
            >
              <Icon name="Users" className="mr-2" />
              Военная служба
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
