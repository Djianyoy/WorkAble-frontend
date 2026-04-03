type CareerMappingData = {
  rekomendasiUtama: string
  score: number
  kategori: string[]
  idePekerjaan: string[]
}

const CareerMappingCard = ({ data }: { data: CareerMappingData }) => {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
      <h2 className="text-xl font-semibold">Career Mapping</h2>
      <div className="mt-3 rounded-xl flex justify-between items-center border border-indigo-100 bg-[#00264E] p-3">
        <div className="space-y-2">
          <p className="text-sm font-semibold text-white">Rekomendasi Utama</p>
          <p className="h3-bold text-white">{data.rekomendasiUtama}</p> 
        </div>
        <div className="">
          <p className="h3-bold text-[#FF7300]">{data.score} </p>
          <p className="caption-regular text-white">poin</p>
        </div>
      </div>
      <div className="mt-4 grid grid-cols-1 gap-3 sm:grid-cols-2">
        <div className="rounded-xl border border-slate-200 bg-slate-50 p-3">
          <p className="text-xs font-medium uppercase text-slate-400">Kategori</p>
          <div className="mt-2 space-y-1">
            {data.kategori.map((item) => (
              <span key={item} className="inline-block rounded-full bg-blue-100 px-2 py-1 text-xs font-medium text-blue-800">
                {item}
              </span>
            ))}
          </div>
        </div>
        <div className="rounded-xl border border-slate-200 bg-slate-50 p-3">
          <p className="text-xs font-medium uppercase text-slate-400">Ide Pekerjaan</p>
          <div className="mt-2 space-y-1">
            {data.idePekerjaan.map((item) => (
              <span key={item} className="inline-block rounded-full bg-green-100 px-2 py-1 text-xs font-medium text-green-800">
                {item}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default CareerMappingCard
