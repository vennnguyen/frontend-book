import Carousel from '@/components/layout/carousel'
import Header from '@/components/layout/header'
import { useAuthStore } from '@/stores/useAuthStore'
import type { Product } from '@/types/product'
import React from 'react'

const Home = () => {
  const user = useAuthStore((s)=>s.user)
  console.log(user);
  const mockProducts: Product[] = [
  {
    id: "1",
    name: "Clean Code",
    price: 120000,
    image: "https://picsum.photos/300/400?random=1",
    author: "Robert C. Martin",
    description: "Sách kinh điển về clean code cho lập trình viên",
  },
  {
    id: "2",
    name: "The Pragmatic Programmer",
    price: 150000,
    image: "https://picsum.photos/300/400?random=2",
    author: "Andrew Hunt",
    description: "Tư duy thực tế trong lập trình",
  },
  {
    id: "3",
    name: "Design Patterns",
    price: 180000,
    image: "https://picsum.photos/300/400?random=3",
    author: "Erich Gamma",
    description: "Các mẫu thiết kế phần mềm kinh điển",
  },
  {
    id: "4",
    name: "You Don't Know JS",
    price: 110000,
    image: "https://picsum.photos/300/400?random=4",
    author: "Kyle Simpson",
    description: "Hiểu sâu về JavaScript",
  },
  {
    id: "5",
    name: "Refactoring",
    price: 160000,
    image: "https://picsum.photos/300/400?random=5",
    author: "Martin Fowler",
    description: "Cải thiện code mà không thay đổi hành vi",
  },
  {
    id: "6",
    name: "Effective Java",
    price: 170000,
    image: "https://picsum.photos/300/400?random=6",
    author: "Joshua Bloch",
    description: "Best practices cho Java",
  },
  {
    id: "7",
    name: "Introduction to Algorithms",
    price: 200000,
    image: "https://picsum.photos/300/400?random=7",
    author: "Thomas H. Cormen",
    description: "Giải thuật và cấu trúc dữ liệu",
  },
  {
    id: "8",
    name: "System Design Interview",
    price: 140000,
    image: "https://picsum.photos/300/400?random=8",
    author: "Alex Xu",
    description: "Chuẩn bị phỏng vấn system design",
  },
  {
    id: "9",
    name: "Deep Work",
    price: 100000,
    image: "https://picsum.photos/300/400?random=9",
    author: "Cal Newport",
    description: "Tập trung sâu trong công việc",
  },
  {
    id: "10",
    name: "Atomic Habits",
    price: 95000,
    image: "https://picsum.photos/300/400?random=10",
    author: "James Clear",
    description: "Xây dựng thói quen hiệu quả",
  },
]

  return (
    <div>
        <Header/>
        <div className="main-home h-[1100px]">
          <img src="src/assets/images/img-home-slider1.jpg" alt="slider-home" />
          <section className='main-content mt-10'>
            <div className='mx-auto items-center px-12 py-2'>
                <div className='section-head mb-7'>
                  <h2 className='text-[#016504] font-bold text-[18px]'>Sản phẩm mới phát hành</h2>
                </div>
                <div className='content-session'>
                  <Carousel products={mockProducts}/>
                </div>

          </div>
          </section>
        </div>
    </div>
  )
}

export default Home