import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const Hero = () => {
  return (
    <section className="bg-gradient-to-r from-blue-800 to-blue-900 text-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Министерство Цифрового Развития
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-blue-100 max-w-3xl mx-auto">
            Обеспечиваем цифровую трансформацию государственного управления и
            развитие информационного общества в Российской Федерации
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-white text-blue-800 hover:bg-gray-100"
            >
              <Icon name="FileText" className="mr-2" />
              Документы и регламенты
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-blue-800"
            >
              <Icon name="Users" className="mr-2" />
              Государственные услуги
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
