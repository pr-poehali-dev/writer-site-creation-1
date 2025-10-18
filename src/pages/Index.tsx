import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import Icon from '@/components/ui/icon';

interface Book {
  id: number;
  title: string;
  year: string;
  genre: string;
  cover: string;
  excerpt: string;
  description: string;
}

interface BlogPost {
  id: number;
  title: string;
  date: string;
  preview: string;
  content: string;
}

interface Publication {
  id: number;
  title: string;
  magazine: string;
  year: string;
  link: string;
}

const books: Book[] = [
  {
    id: 1,
    title: "Тени забытых",
    year: "2023",
    genre: "Мистика",
    cover: "📚",
    description: "Роман о границах между мирами, где прошлое никогда не умирает",
    excerpt: "Старый дом на окраине города хранил секреты, которые не должны были выйти наружу. Но когда Анна переступила порог, она почувствовала, как холодные пальцы прошлого коснулись её души. Зеркала в коридоре отражали не её лицо, а лица тех, кто жил здесь столетие назад..."
  },
  {
    id: 2,
    title: "Алая рукопись",
    year: "2022",
    genre: "Триллер",
    cover: "🖋️",
    description: "История о писателе, чьи произведения начинают сбываться в реальности",
    excerpt: "Каждая строка, написанная Виктором, материализовалась в мире. Сначала это были мелочи — случайные встречи, совпадения. Но когда в его новом романе погиб герой, утром он увидел в новостях знакомое лицо. Реальность и вымысел слились воедино..."
  },
  {
    id: 3,
    title: "Последний читатель",
    year: "2021",
    genre: "Фантастика",
    cover: "🌙",
    description: "Антиутопия о мире, где чтение запрещено законом",
    excerpt: "В городе, где книги сжигали на площадях, Елена хранила последнюю библиотеку в подвале своего дома. Каждую ночь она читала при свете свечи, зная, что может быть последним человеком на Земле, кто ещё помнит силу слова..."
  }
];

const blogPosts: BlogPost[] = [
  {
    id: 1,
    title: "О природе вдохновения",
    date: "15 октября 2024",
    preview: "Откуда берутся истории и как не потерять музу в повседневности...",
    content: "Вдохновение — это не молния с ясного неба. Это тихий голос, который нужно научиться слышать. Я пишу каждый день, даже когда не хочется. Потому что творчество — это не ожидание музы, а дисциплина, ритуал, диалог с самим собой."
  },
  {
    id: 2,
    title: "Почему я пишу о тьме",
    date: "3 октября 2024",
    preview: "Размышления о том, зачем исследовать мрачные стороны человеческой души...",
    content: "Мы боимся темноты, но именно в ней скрыты наши настоящие лица. Когда я пишу о страхе, боли, потерях — я не прославляю их. Я пытаюсь понять. Каждый персонаж в моих книгах — это отражение части меня, с которой я борюсь или примиряюсь."
  }
];

const publications: Publication[] = [
  {
    id: 1,
    title: "Осколки памяти",
    magazine: "Литературный журнал 'Современник'",
    year: "2024",
    link: "#"
  },
  {
    id: 2,
    title: "Призраки метрополиса",
    magazine: "Альманах 'Новая проза'",
    year: "2023",
    link: "#"
  },
  {
    id: 3,
    title: "Тишина между слов",
    magazine: "Сборник 'Голоса поколения'",
    year: "2023",
    link: "#"
  }
];

export default function Index() {
  const [activeSection, setActiveSection] = useState<'home' | 'books' | 'blog' | 'publications'>('home');
  const [selectedBook, setSelectedBook] = useState<Book | null>(null);
  const [selectedPost, setSelectedPost] = useState<BlogPost | null>(null);

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-secondary/20 to-black">
      <nav className="border-b border-border/50 backdrop-blur-sm bg-black/30 sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <h1 className="text-3xl md:text-4xl font-brand text-primary animate-fade-in">
              Yan Demong
            </h1>
            <div className="flex gap-2 md:gap-4 animate-fade-in-delay">
              <Button 
                variant={activeSection === 'home' ? 'default' : 'ghost'}
                onClick={() => setActiveSection('home')}
                className="text-sm md:text-base"
              >
                Главная
              </Button>
              <Button 
                variant={activeSection === 'books' ? 'default' : 'ghost'}
                onClick={() => setActiveSection('books')}
                className="text-sm md:text-base"
              >
                Книги
              </Button>
              <Button 
                variant={activeSection === 'blog' ? 'default' : 'ghost'}
                onClick={() => setActiveSection('blog')}
                className="text-sm md:text-base"
              >
                Блог
              </Button>
              <Button 
                variant={activeSection === 'publications' ? 'default' : 'ghost'}
                onClick={() => setActiveSection('publications')}
                className="text-sm md:text-base"
              >
                Публикации
              </Button>
            </div>
          </div>
        </div>
      </nav>

      <main className="container mx-auto px-4 py-12 md:py-20">
        {activeSection === 'home' && (
          <div className="max-w-4xl mx-auto text-center space-y-8 animate-fade-in">
            <div className="space-y-4">
              <h2 className="text-5xl md:text-7xl font-display font-bold text-foreground leading-tight">
                Истории, рождённые <span className="text-primary">тьмой</span>
              </h2>
              <p className="text-xl md:text-2xl text-muted-foreground font-light italic">
                "Каждая книга — это дверь в другой мир. Я лишь держу ключ."
              </p>
            </div>
            
            <div className="pt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
              <Card className="bg-card/50 backdrop-blur border-primary/20 hover:border-primary/50 transition-all cursor-pointer" onClick={() => setActiveSection('books')}>
                <CardHeader>
                  <div className="text-5xl mb-2">📚</div>
                  <CardTitle className="font-display text-2xl">3 романа</CardTitle>
                  <CardDescription>Опубликовано</CardDescription>
                </CardHeader>
              </Card>
              
              <Card className="bg-card/50 backdrop-blur border-accent/20 hover:border-accent/50 transition-all cursor-pointer" onClick={() => setActiveSection('blog')}>
                <CardHeader>
                  <div className="text-5xl mb-2">✍️</div>
                  <CardTitle className="font-display text-2xl">Блог</CardTitle>
                  <CardDescription>О творчестве</CardDescription>
                </CardHeader>
              </Card>
              
              <Card className="bg-card/50 backdrop-blur border-secondary/20 hover:border-secondary/50 transition-all cursor-pointer" onClick={() => setActiveSection('publications')}>
                <CardHeader>
                  <div className="text-5xl mb-2">🖋️</div>
                  <CardTitle className="font-display text-2xl">Публикации</CardTitle>
                  <CardDescription>В журналах</CardDescription>
                </CardHeader>
              </Card>
            </div>
          </div>
        )}

        {activeSection === 'books' && (
          <div className="space-y-8 animate-fade-in">
            <div className="text-center space-y-2">
              <h2 className="text-4xl md:text-6xl font-display font-bold text-foreground">Книги</h2>
              <p className="text-muted-foreground text-lg">Нажмите на книгу, чтобы прочитать отрывок</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {books.map((book, index) => (
                <Card 
                  key={book.id} 
                  className="bg-card/50 backdrop-blur border-primary/20 hover:border-primary transition-all cursor-pointer group hover:scale-105 duration-300"
                  onClick={() => setSelectedBook(book)}
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <CardHeader>
                    <div className="text-6xl mb-4 group-hover:scale-110 transition-transform">{book.cover}</div>
                    <CardTitle className="font-display text-2xl text-primary">{book.title}</CardTitle>
                    <CardDescription className="text-base">
                      {book.genre} • {book.year}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">{book.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        )}

        {activeSection === 'blog' && (
          <div className="space-y-8 animate-fade-in max-w-3xl mx-auto">
            <div className="text-center space-y-2">
              <h2 className="text-4xl md:text-6xl font-display font-bold text-foreground">Блог</h2>
              <p className="text-muted-foreground text-lg">Мысли о писательстве и творчестве</p>
            </div>
            
            <div className="space-y-6">
              {blogPosts.map((post, index) => (
                <Card 
                  key={post.id}
                  className="bg-card/50 backdrop-blur border-accent/20 hover:border-accent transition-all cursor-pointer"
                  onClick={() => setSelectedPost(post)}
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <CardHeader>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
                      <Icon name="Calendar" size={16} />
                      <span>{post.date}</span>
                    </div>
                    <CardTitle className="font-display text-3xl text-accent hover:text-accent/80 transition-colors">
                      {post.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground text-lg">{post.preview}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        )}

        {activeSection === 'publications' && (
          <div className="space-y-8 animate-fade-in max-w-3xl mx-auto">
            <div className="text-center space-y-2">
              <h2 className="text-4xl md:text-6xl font-display font-bold text-foreground">Публикации</h2>
              <p className="text-muted-foreground text-lg">Рассказы и повести в литературных журналах</p>
            </div>
            
            <div className="space-y-4">
              {publications.map((pub, index) => (
                <Card 
                  key={pub.id}
                  className="bg-card/50 backdrop-blur border-secondary/20 hover:border-secondary transition-all"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <CardHeader>
                    <div className="flex items-start justify-between gap-4">
                      <div className="space-y-2 flex-1">
                        <CardTitle className="font-display text-2xl text-secondary">
                          {pub.title}
                        </CardTitle>
                        <CardDescription className="text-base">
                          {pub.magazine} • {pub.year}
                        </CardDescription>
                      </div>
                      <Icon name="BookOpen" size={24} className="text-secondary/50" />
                    </div>
                  </CardHeader>
                </Card>
              ))}
            </div>
          </div>
        )}
      </main>

      <Dialog open={!!selectedBook} onOpenChange={() => setSelectedBook(null)}>
        <DialogContent className="max-w-2xl bg-card border-primary/30 max-h-[80vh] overflow-y-auto">
          <DialogHeader>
            <div className="text-5xl mb-4">{selectedBook?.cover}</div>
            <DialogTitle className="font-display text-3xl text-primary">
              {selectedBook?.title}
            </DialogTitle>
            <DialogDescription className="text-lg">
              {selectedBook?.genre} • {selectedBook?.year}
            </DialogDescription>
          </DialogHeader>
          <div className="space-y-4">
            <p className="text-muted-foreground italic">{selectedBook?.description}</p>
            <div className="border-l-4 border-primary/50 pl-4 py-2 bg-muted/20 rounded">
              <p className="text-foreground leading-relaxed text-lg font-light">
                {selectedBook?.excerpt}
              </p>
            </div>
          </div>
        </DialogContent>
      </Dialog>

      <Dialog open={!!selectedPost} onOpenChange={() => setSelectedPost(null)}>
        <DialogContent className="max-w-2xl bg-card border-accent/30 max-h-[80vh] overflow-y-auto">
          <DialogHeader>
            <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
              <Icon name="Calendar" size={16} />
              <span>{selectedPost?.date}</span>
            </div>
            <DialogTitle className="font-display text-3xl text-accent">
              {selectedPost?.title}
            </DialogTitle>
          </DialogHeader>
          <div className="space-y-4">
            <p className="text-foreground leading-relaxed text-lg">
              {selectedPost?.content}
            </p>
          </div>
        </DialogContent>
      </Dialog>

      <footer className="border-t border-border/50 mt-20 backdrop-blur-sm bg-black/30">
        <div className="container mx-auto px-4 py-8 text-center">
          <p className="text-muted-foreground">
            © 2024 Yan Demong. Все права защищены.
          </p>
        </div>
      </footer>
    </div>
  );
}