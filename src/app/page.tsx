"use client"

import { Button } from "@material-tailwind/react"
import dayjs from "dayjs"
import { useRouter } from "next/navigation"

const MOCK_COURT_LIST = [
  {
    id: "1",
    name: "Court 1",
    description: "description",
    location: "link URL",
    startDate: new Date(),
    endDate: new Date(),
    quota: 20,
    limit: 30,
    totalPrice: 2400,
    deadlineAt: new Date(),
    createdAt: new Date(),
    updatedAt: new Date(),
    deletedAt: new Date(),
  },
  {
    id: "2",
    name: "Court 2",
    description: "description",
    location: "link URL",
    startDate: new Date(),
    endDate: new Date(),
    quota: 20,
    limit: 30,
    totalPrice: 2400,
    deadlineAt: new Date(),
    createdAt: new Date(),
    updatedAt: new Date(),
    deletedAt: new Date(),
  },
  {
    id: "3",
    name: "Court 3",
    description: "description",
    location: "link URL",
    startDate: new Date(),
    endDate: new Date(),
    quota: 20,
    limit: 30,
    totalPrice: 2400,
    deadlineAt: new Date(),
    createdAt: new Date(),
    updatedAt: new Date(),
    deletedAt: new Date(),
  },
  {
    id: "4",
    name: "Court 4",
    description: "description",
    location: "link URL",
    startDate: new Date(),
    endDate: new Date(),
    quota: 20,
    limit: 30,
    totalPrice: 2400,
    deadlineAt: new Date(),
    createdAt: new Date(),
    updatedAt: new Date(),
    deletedAt: new Date(),
  },
]

const HomePage = () => {
  const router = useRouter()

  const onBooking = (id: string) => {
    router.push(`/booking/${id}`)
  }

  return (
    <div>
      <div className="font-bold text-2xl">Available Court</div>
      <div className="mt-2 grid lg:grid-cols-3 grid-cols-1 gap-6">
        {MOCK_COURT_LIST.map((item, index) => {
          return (
            <div key={index} className="relative h-96 border-2 rounded-lg p-4">
              <div>{item.name}</div>
              <div>{item.description}</div>
              <div>
                Join: {item.quota} /{" "}
                <span className="font-bold text-xl leading-6">
                  {item.limit}
                </span>
              </div>
              <div>
                Play date: {dayjs(item.startDate).format("DD - MMM - YYYY")}
              </div>
              <div className="absolute bottom-8 right-8">
                <Button variant="filled" onClick={() => onBooking(item.id)}>
                  Booking Now
                </Button>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default HomePage
