import { Container, Title, TopBar } from '@/shared/components/shared';
import { Carousel } from '@/shared/components/shared/carousel';
import { Filter } from '@/shared/components/shared/filter/filter';

export default function Home() {
  return (
    <main>
      <Container className="">
        <Title size="xl" className="mt-6" text="Все пиццы" />
        <TopBar />

        {/* <Carousel /> */}
      </Container>
      <Container className="flex items-center justify-between mt-7 gap-6 ">
        <Filter className="w-[250px]" />
        <div className="border w-full"></div>
      </Container>
    </main>
  );
}
