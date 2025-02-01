"use client"

import React, { use } from "react"

const BookingDetail = ({ params }: { params: Promise<{ id: string }> }) => {
  const { id } = use(params)

  return <div>BookingDetail {id}</div>
}

export default BookingDetail
