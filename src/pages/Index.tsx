import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [activeSection, setActiveSection] = useState('home');

  const navItems = [
    { id: 'home', label: 'Главная', icon: 'Home' },
    { id: 'news', label: 'Новости', icon: 'Newspaper' },
    { id: 'structure', label: 'Структура', icon: 'Building2' },
    { id: 'services', label: 'Услуги', icon: 'FileText' },
    { id: 'press', label: 'Пресс-центр', icon: 'Radio' },
    { id: 'contacts', label: 'Контакты', icon: 'Mail' },
  ];

  const newsItems = [
    {
      id: 1,
      title: 'Подписано соглашение о социально-экономическом развитии республики',
      date: '15.10.2025',
      category: 'Экономика',
    },
    {
      id: 2,
      title: 'Состоялось заседание Правительства ДНР',
      date: '14.10.2025',
      category: 'Политика',
    },
    {
      id: 3,
      title: 'Открыт новый многофункциональный центр государственных услуг',
      date: '13.10.2025',
      category: 'Общество',
    },
  ];

  const services = [
    { title: 'Регистрация граждан', icon: 'UserPlus' },
    { title: 'Получение документов', icon: 'FileCheck' },
    { title: 'Социальная поддержка', icon: 'Heart' },
    { title: 'Налоговые услуги', icon: 'Calculator' },
  ];

  return (
    <div className="min-h-screen bg-background">
      <header className="border-b-4 border-primary bg-secondary text-secondary-foreground">
        <div className="container mx-auto px-4 py-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <div className="w-16 h-16 bg-primary flex items-center justify-center transform rotate-45">
                <span className="text-3xl font-bold text-primary-foreground transform -rotate-45">Д</span>
              </div>
              <div>
                <h1 className="text-3xl md:text-4xl font-bold leading-tight">
                  Правительство<br />Донецкой Народной Республики
                </h1>
              </div>
            </div>
          </div>
        </div>
      </header>

      <nav className="bg-white border-b-2 border-secondary sticky top-0 z-50 shadow-lg">
        <div className="container mx-auto px-4">
          <div className="flex overflow-x-auto">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => setActiveSection(item.id)}
                className={`flex items-center gap-2 px-6 py-4 font-medium transition-all border-b-4 whitespace-nowrap ${
                  activeSection === item.id
                    ? 'border-primary text-primary bg-accent/10'
                    : 'border-transparent text-foreground hover:border-accent hover:bg-accent/5'
                }`}
              >
                <Icon name={item.icon as any} size={20} />
                {item.label}
              </button>
            ))}
          </div>
        </div>
      </nav>

      <main className="container mx-auto px-4 py-12">
        {activeSection === 'home' && (
          <>
            <section className="mb-16 relative">
              <div className="absolute top-0 right-0 w-96 h-96 bg-accent/10 transform rotate-12 -z-10"></div>
              <div className="absolute bottom-0 left-0 w-72 h-72 bg-primary/5 transform -rotate-6 -z-10"></div>
              
              <div className="grid md:grid-cols-2 gap-12 items-center">
                <div>
                  <div className="inline-block bg-primary text-primary-foreground px-4 py-2 mb-6 transform -skew-x-12">
                    <span className="inline-block transform skew-x-12 font-bold">ОФИЦИАЛЬНЫЙ ПОРТАЛ</span>
                  </div>
                  <h2 className="text-5xl md:text-7xl font-bold mb-6 leading-none">
                    Вперёд<br />
                    <span className="text-primary">к развитию</span>
                  </h2>
                  <p className="text-xl mb-8 text-muted-foreground">
                    Электронные государственные услуги, официальная информация и новости республики
                  </p>
                  <div className="flex gap-4">
                    <Button size="lg" className="font-bold">
                      <Icon name="FileText" className="mr-2" size={20} />
                      Получить услугу
                    </Button>
                    <Button size="lg" variant="outline" className="font-bold border-2">
                      <Icon name="Newspaper" className="mr-2" size={20} />
                      Новости
                    </Button>
                  </div>
                </div>
                <div className="relative">
                  <div className="aspect-square bg-gradient-to-br from-primary/20 to-accent/20 transform rotate-3 border-8 border-secondary"></div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-3/4 h-3/4 bg-secondary/80 backdrop-blur flex items-center justify-center transform -rotate-3">
                      <Icon name="Building2" size={120} className="text-primary" />
                    </div>
                  </div>
                </div>
              </div>
            </section>

            <section className="mb-16">
              <div className="flex items-center gap-4 mb-8">
                <div className="h-1 w-16 bg-primary"></div>
                <h3 className="text-3xl font-bold">Последние новости</h3>
                <div className="h-1 flex-1 bg-accent"></div>
              </div>
              <div className="grid md:grid-cols-3 gap-6">
                {newsItems.map((news, idx) => (
                  <Card key={news.id} className="border-l-4 border-l-primary hover:shadow-xl transition-shadow">
                    <CardHeader>
                      <div className="flex items-center justify-between mb-2">
                        <span className="bg-accent text-accent-foreground px-3 py-1 text-sm font-bold">
                          {news.category}
                        </span>
                        <span className="text-sm text-muted-foreground font-mono">{news.date}</span>
                      </div>
                      <CardTitle className="text-lg leading-tight">{news.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <Button variant="ghost" className="w-full justify-start font-bold text-primary">
                        Читать далее
                        <Icon name="ArrowRight" className="ml-2" size={16} />
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </section>

            <section className="mb-16">
              <div className="flex items-center gap-4 mb-8">
                <div className="h-1 w-16 bg-primary"></div>
                <h3 className="text-3xl font-bold">Государственные услуги</h3>
                <div className="h-1 flex-1 bg-accent"></div>
              </div>
              <div className="grid md:grid-cols-4 gap-6">
                {services.map((service, idx) => (
                  <Card
                    key={idx}
                    className="text-center hover:bg-primary hover:text-primary-foreground transition-all cursor-pointer group border-2"
                  >
                    <CardHeader>
                      <div className="mx-auto mb-4 w-20 h-20 bg-accent group-hover:bg-accent/20 flex items-center justify-center transform rotate-45 transition-all">
                        <Icon name={service.icon as any} size={32} className="transform -rotate-45" />
                      </div>
                      <CardTitle className="text-lg">{service.title}</CardTitle>
                    </CardHeader>
                  </Card>
                ))}
              </div>
            </section>
          </>
        )}

        {activeSection === 'news' && (
          <div>
            <h2 className="text-4xl font-bold mb-8 flex items-center gap-4">
              <Icon name="Newspaper" size={40} className="text-primary" />
              Новости республики
            </h2>
            <div className="space-y-6">
              {newsItems.map((news) => (
                <Card key={news.id} className="border-l-8 border-l-primary hover:shadow-xl transition-shadow">
                  <CardHeader>
                    <div className="flex items-center gap-4 mb-2">
                      <span className="bg-accent text-accent-foreground px-4 py-2 text-sm font-bold transform -skew-x-12">
                        <span className="inline-block transform skew-x-12">{news.category}</span>
                      </span>
                      <span className="text-sm text-muted-foreground font-mono">{news.date}</span>
                    </div>
                    <CardTitle className="text-2xl">{news.title}</CardTitle>
                    <CardDescription className="text-base">
                      Подробная информация о событии. Полный текст новости доступен по ссылке.
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Button className="font-bold">
                      Подробнее
                      <Icon name="ArrowRight" className="ml-2" size={16} />
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        )}

        {activeSection === 'structure' && (
          <div>
            <h2 className="text-4xl font-bold mb-8 flex items-center gap-4">
              <Icon name="Building2" size={40} className="text-primary" />
              Структура правительства
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              {[
                'Глава Республики',
                'Министерство экономического развития',
                'Министерство финансов',
                'Министерство образования и науки',
                'Министерство здравоохранения',
                'Министерство внутренних дел',
              ].map((dept, idx) => (
                <Card key={idx} className="border-t-4 border-t-primary hover:shadow-xl transition-shadow">
                  <CardHeader>
                    <CardTitle className="text-xl flex items-center gap-3">
                      <div className="w-12 h-12 bg-primary flex items-center justify-center">
                        <Icon name="Users" size={24} className="text-primary-foreground" />
                      </div>
                      {dept}
                    </CardTitle>
                  </CardHeader>
                </Card>
              ))}
            </div>
          </div>
        )}

        {activeSection === 'services' && (
          <div>
            <h2 className="text-4xl font-bold mb-8 flex items-center gap-4">
              <Icon name="FileText" size={40} className="text-primary" />
              Государственные услуги
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              {services.concat([
                { title: 'Бизнес-услуги', icon: 'Briefcase' },
                { title: 'Земельные вопросы', icon: 'Map' },
                { title: 'Жилищные услуги', icon: 'Home' },
                { title: 'Транспорт и дороги', icon: 'Car' },
                { title: 'Образование', icon: 'GraduationCap' },
              ]).map((service, idx) => (
                <Card
                  key={idx}
                  className="hover:bg-secondary hover:text-secondary-foreground transition-all cursor-pointer border-2"
                >
                  <CardHeader>
                    <div className="mb-4 w-16 h-16 bg-accent flex items-center justify-center transform rotate-45">
                      <Icon name={service.icon as any} size={28} className="transform -rotate-45" />
                    </div>
                    <CardTitle className="text-lg">{service.title}</CardTitle>
                    <CardDescription>Подробнее об услуге →</CardDescription>
                  </CardHeader>
                </Card>
              ))}
            </div>
          </div>
        )}

        {activeSection === 'press' && (
          <div>
            <h2 className="text-4xl font-bold mb-8 flex items-center gap-4">
              <Icon name="Radio" size={40} className="text-primary" />
              Пресс-центр
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <Card className="border-l-4 border-l-accent">
                <CardHeader>
                  <CardTitle className="text-2xl">Аккредитация СМИ</CardTitle>
                  <CardDescription className="text-base">
                    Порядок получения аккредитации для представителей средств массовой информации
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Button variant="outline" className="border-2 font-bold">
                    <Icon name="FileText" className="mr-2" size={18} />
                    Подать заявку
                  </Button>
                </CardContent>
              </Card>
              <Card className="border-l-4 border-l-primary">
                <CardHeader>
                  <CardTitle className="text-2xl">Пресс-релизы</CardTitle>
                  <CardDescription className="text-base">
                    Официальные заявления и информационные материалы для СМИ
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Button variant="outline" className="border-2 font-bold">
                    <Icon name="Download" className="mr-2" size={18} />
                    Скачать материалы
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        )}

        {activeSection === 'contacts' && (
          <div>
            <h2 className="text-4xl font-bold mb-8 flex items-center gap-4">
              <Icon name="Mail" size={40} className="text-primary" />
              Контакты
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <Card className="border-t-4 border-t-primary">
                <CardHeader>
                  <CardTitle className="text-2xl">Приёмная Правительства</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-start gap-3">
                    <Icon name="MapPin" size={24} className="text-primary mt-1" />
                    <div>
                      <p className="font-bold">Адрес:</p>
                      <p className="text-muted-foreground">г. Донецк, ул. Артёма, 98</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Icon name="Phone" size={24} className="text-primary mt-1" />
                    <div>
                      <p className="font-bold">Телефон:</p>
                      <p className="text-muted-foreground">+7 (000) 000-00-00</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Icon name="Mail" size={24} className="text-primary mt-1" />
                    <div>
                      <p className="font-bold">Email:</p>
                      <p className="text-muted-foreground">info@gov-dnr.ru</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
              <Card className="border-t-4 border-t-accent">
                <CardHeader>
                  <CardTitle className="text-2xl">График работы</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="flex justify-between items-center py-2 border-b">
                      <span className="font-bold">Понедельник - Четверг</span>
                      <span>9:00 - 18:00</span>
                    </div>
                    <div className="flex justify-between items-center py-2 border-b">
                      <span className="font-bold">Пятница</span>
                      <span>9:00 - 17:00</span>
                    </div>
                    <div className="flex justify-between items-center py-2">
                      <span className="font-bold">Суббота, Воскресенье</span>
                      <span className="text-muted-foreground">Выходной</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        )}
      </main>

      <footer className="bg-secondary text-secondary-foreground mt-20 border-t-4 border-primary">
        <div className="container mx-auto px-4 py-12">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="w-12 h-12 bg-primary flex items-center justify-center transform rotate-45 mb-4">
                <span className="text-xl font-bold text-primary-foreground transform -rotate-45">Д</span>
              </div>
              <h4 className="text-lg font-bold mb-2">Правительство ДНР</h4>
              <p className="text-sm opacity-80">Официальный портал</p>
            </div>
            <div>
              <h5 className="font-bold mb-4">Навигация</h5>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="opacity-80 hover:opacity-100 hover:underline">Новости</a></li>
                <li><a href="#" className="opacity-80 hover:opacity-100 hover:underline">Структура</a></li>
                <li><a href="#" className="opacity-80 hover:opacity-100 hover:underline">Услуги</a></li>
              </ul>
            </div>
            <div>
              <h5 className="font-bold mb-4">Информация</h5>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="opacity-80 hover:opacity-100 hover:underline">Пресс-центр</a></li>
                <li><a href="#" className="opacity-80 hover:opacity-100 hover:underline">Документы</a></li>
                <li><a href="#" className="opacity-80 hover:opacity-100 hover:underline">Контакты</a></li>
              </ul>
            </div>
            <div>
              <h5 className="font-bold mb-4">Контакты</h5>
              <p className="text-sm opacity-80 mb-2">г. Донецк, ул. Артёма, 98</p>
              <p className="text-sm opacity-80 mb-2">+7 (000) 000-00-00</p>
              <p className="text-sm opacity-80">info@gov-dnr.ru</p>
            </div>
          </div>
          <div className="border-t-2 border-primary/20 mt-8 pt-8 text-center text-sm opacity-80">
            <p>© 2025 Правительство Донецкой Народной Республики. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
