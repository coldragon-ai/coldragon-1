"use client";

import { useState } from "react";

type Attendance = "attend" | "absent" | "";

type RsvpForm = {
  name: string;
  division: string;
  email: string;
  phone: string;
  attendance: Attendance;
  message: string;
};

const initialForm: RsvpForm = {
  name: "",
  division: "",
  email: "",
  phone: "",
  attendance: "",
  message: "",
};

// 확정되지 않은 값은 ○ 표기로 두었습니다. 필요한 부분만 수정해 사용하세요.
const EVENT = {
  title: "국가인공지능전략위원회 네트워킹 행사",
  subtitle: "분과위원 참석 여부 확인",
  date: "2026년 8월 31일 (월) 00:00 ~ 00:00",
  place: "서울특별시 중구 서울스퀘어",
  placeDetail: "○○층 ○○홀 (서울역 맞은편)",
  host: "국가인공지능전략위원회 지원단",
  rsvpDeadline: "2026년 9월 1일 (화)까지",
  dressCode: "비즈니스 캐주얼",
  contactName: "지원단 ○○○ 주무관",
  contactPhone: "02-0000-0000",
  contactEmail: "ai-council@example.go.kr",
};

// 행사 진행 순서 (시간은 임시값입니다)
const PROGRAM: { time: string; title: string }[] = [
  { time: "00:00", title: "등록 및 명찰 수령" },
  { time: "00:00", title: "개회 및 지원단 인사말" },
  { time: "00:00", title: "분과별 활동 공유" },
  { time: "00:00", title: "네트워킹 리셉션 (다과 제공)" },
  { time: "00:00", title: "폐회" },
];

// 참석자 안내 사항
const NOTICES: string[] = [
  "행사장 입구에서 성명·소속 분과 확인 후 명찰을 수령해 주시기 바랍니다.",
  "별도 주차 지원이 없으므로 대중교통 이용을 권장드립니다. (서울역 도보 3분)",
  "리셉션에는 다과가 제공되며, 알레르기·식이 제한이 있으신 경우 아래 전달 사항에 기재해 주세요.",
  "행사 사진이 홍보 자료로 활용될 수 있습니다. 촬영을 원치 않으시면 현장 안내데스크에 알려 주세요.",
];

export default function Home() {
  const [form, setForm] = useState<RsvpForm>(initialForm);

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  }

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    // 백엔드 미구현 - 화면만 제공
    console.log("참석 여부 응답", form);
  }

  const fieldClass =
    "h-11 rounded-lg border border-slate-300 bg-white px-3.5 text-sm text-slate-900 outline-none transition-colors placeholder:text-slate-400 focus:border-blue-600 focus:ring-2 focus:ring-blue-100 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-50 dark:focus:ring-blue-950";
  const labelClass =
    "text-sm font-medium text-slate-800 dark:text-slate-100";

  return (
    <div className="flex flex-1 flex-col bg-slate-50 font-sans dark:bg-slate-950">
      {/* 상단 바 */}
      <header className="border-b border-blue-800 bg-blue-700 text-white">
        <div className="mx-auto flex w-full max-w-3xl items-center gap-3 px-6 py-4">
          <span className="flex h-8 w-8 items-center justify-center rounded-md bg-white/15 text-sm font-bold">
            AI
          </span>
          <span className="text-sm font-semibold tracking-tight">
            {EVENT.host}
          </span>
        </div>
      </header>

      <main className="mx-auto w-full max-w-3xl flex-1 px-6 py-10 sm:py-14">
        {/* 히어로 */}
        <section className="rounded-2xl border border-blue-100 bg-white p-8 shadow-sm dark:border-slate-800 dark:bg-slate-900 sm:p-10">
          <p className="text-sm font-semibold uppercase tracking-wide text-blue-700 dark:text-blue-400">
            {EVENT.subtitle}
          </p>
          <h1 className="mt-2 text-2xl font-bold leading-9 tracking-tight text-slate-900 dark:text-slate-50 sm:text-3xl">
            {EVENT.title}
          </h1>
          <p className="mt-4 text-sm leading-6 text-slate-600 dark:text-slate-300">
            분과위원 여러분을 네트워킹 행사에 초대합니다. 원활한 진행을 위해
            아래 양식으로 참석 여부를 회신해 주시기 바랍니다.
          </p>

          <dl className="mt-6 grid grid-cols-1 gap-x-6 gap-y-3 border-t border-slate-100 pt-6 text-sm dark:border-slate-800 sm:grid-cols-[6rem_1fr]">
            <dt className="font-medium text-slate-500 dark:text-slate-400">
              일시
            </dt>
            <dd className="text-slate-900 dark:text-slate-100">{EVENT.date}</dd>
            <dt className="font-medium text-slate-500 dark:text-slate-400">
              장소
            </dt>
            <dd className="text-slate-900 dark:text-slate-100">
              {EVENT.place}
              <span className="block text-slate-500 dark:text-slate-400">
                {EVENT.placeDetail}
              </span>
            </dd>
            <dt className="font-medium text-slate-500 dark:text-slate-400">
              복장
            </dt>
            <dd className="text-slate-900 dark:text-slate-100">
              {EVENT.dressCode}
            </dd>
            <dt className="font-medium text-slate-500 dark:text-slate-400">
              회신 기한
            </dt>
            <dd className="font-medium text-blue-700 dark:text-blue-400">
              {EVENT.rsvpDeadline}
            </dd>
            <dt className="font-medium text-slate-500 dark:text-slate-400">
              문의
            </dt>
            <dd className="text-slate-900 dark:text-slate-100">
              {EVENT.contactName} · {EVENT.contactPhone}
              <span className="block text-slate-500 dark:text-slate-400">
                {EVENT.contactEmail}
              </span>
            </dd>
          </dl>
        </section>

        {/* 행사 진행 순서 */}
        <section className="mt-6 rounded-2xl border border-blue-100 bg-white p-8 shadow-sm dark:border-slate-800 dark:bg-slate-900 sm:p-10">
          <h2 className="text-lg font-semibold text-slate-900 dark:text-slate-50">
            행사 진행 순서
          </h2>
          <ol className="mt-5 flex flex-col gap-3">
            {PROGRAM.map((item, i) => (
              <li key={i} className="flex gap-4 text-sm">
                <span className="w-14 shrink-0 font-mono font-medium text-blue-700 dark:text-blue-400">
                  {item.time}
                </span>
                <span className="text-slate-700 dark:text-slate-200">
                  {item.title}
                </span>
              </li>
            ))}
          </ol>
          <p className="mt-4 text-xs text-slate-400">
            ※ 세부 시간은 사정에 따라 변경될 수 있습니다.
          </p>
        </section>

        {/* 참석자 안내 사항 */}
        <section className="mt-6 rounded-2xl border border-blue-100 bg-white p-8 shadow-sm dark:border-slate-800 dark:bg-slate-900 sm:p-10">
          <h2 className="text-lg font-semibold text-slate-900 dark:text-slate-50">
            참석자 안내 사항
          </h2>
          <ul className="mt-5 flex flex-col gap-3 text-sm text-slate-700 dark:text-slate-200">
            {NOTICES.map((notice, i) => (
              <li key={i} className="flex gap-2.5">
                <span
                  aria-hidden
                  className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-blue-600"
                />
                <span className="leading-6">{notice}</span>
              </li>
            ))}
          </ul>
        </section>

        {/* 회신 폼 */}
        <section className="mt-6 rounded-2xl border border-blue-100 bg-white p-8 shadow-sm dark:border-slate-800 dark:bg-slate-900 sm:p-10">
          <h2 className="text-lg font-semibold text-slate-900 dark:text-slate-50">
            참석 여부 회신
          </h2>

          <form onSubmit={handleSubmit} className="mt-6 flex flex-col gap-5">
            <div className="flex flex-col gap-2">
              <label htmlFor="name" className={labelClass}>
                성명
              </label>
              <input
                id="name"
                name="name"
                type="text"
                required
                value={form.name}
                onChange={handleChange}
                autoComplete="name"
                placeholder="홍길동"
                className={fieldClass}
              />
            </div>

            <div className="flex flex-col gap-2">
              <label htmlFor="division" className={labelClass}>
                소속 분과
              </label>
              <input
                id="division"
                name="division"
                type="text"
                required
                value={form.division}
                onChange={handleChange}
                placeholder="예: 산업·공공 분과"
                className={fieldClass}
              />
            </div>

            <div className="flex flex-col gap-2">
              <label htmlFor="email" className={labelClass}>
                이메일
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                value={form.email}
                onChange={handleChange}
                autoComplete="email"
                placeholder="you@example.go.kr"
                className={fieldClass}
              />
            </div>

            <div className="flex flex-col gap-2">
              <label htmlFor="phone" className={labelClass}>
                연락처
              </label>
              <input
                id="phone"
                name="phone"
                type="tel"
                required
                value={form.phone}
                onChange={handleChange}
                autoComplete="tel"
                placeholder="010-1234-5678"
                className={fieldClass}
              />
            </div>

            <fieldset className="flex flex-col gap-2">
              <legend className={labelClass}>참석 여부</legend>
              <div className="mt-1 flex flex-col gap-2 sm:flex-row sm:gap-3">
                <label className="flex flex-1 cursor-pointer items-center gap-2 rounded-lg border border-slate-300 px-4 py-3 text-sm text-slate-800 transition-colors has-[:checked]:border-blue-600 has-[:checked]:bg-blue-50 has-[:checked]:text-blue-800 dark:border-slate-700 dark:text-slate-100 dark:has-[:checked]:bg-blue-950 dark:has-[:checked]:text-blue-200">
                  <input
                    type="radio"
                    name="attendance"
                    value="attend"
                    required
                    checked={form.attendance === "attend"}
                    onChange={handleChange}
                    className="h-4 w-4 accent-blue-600"
                  />
                  참석합니다
                </label>
                <label className="flex flex-1 cursor-pointer items-center gap-2 rounded-lg border border-slate-300 px-4 py-3 text-sm text-slate-800 transition-colors has-[:checked]:border-blue-600 has-[:checked]:bg-blue-50 has-[:checked]:text-blue-800 dark:border-slate-700 dark:text-slate-100 dark:has-[:checked]:bg-blue-950 dark:has-[:checked]:text-blue-200">
                  <input
                    type="radio"
                    name="attendance"
                    value="absent"
                    checked={form.attendance === "absent"}
                    onChange={handleChange}
                    className="h-4 w-4 accent-blue-600"
                  />
                  참석이 어렵습니다
                </label>
              </div>
            </fieldset>

            <div className="flex flex-col gap-2">
              <label htmlFor="message" className={labelClass}>
                전달 사항 <span className="text-slate-400">(선택)</span>
              </label>
              <textarea
                id="message"
                name="message"
                rows={4}
                value={form.message}
                onChange={handleChange}
                placeholder="식이 요청, 동반 인원, 기타 문의 사항을 남겨 주세요."
                className="resize-y rounded-lg border border-slate-300 bg-white px-3.5 py-2.5 text-sm text-slate-900 outline-none transition-colors placeholder:text-slate-400 focus:border-blue-600 focus:ring-2 focus:ring-blue-100 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-50 dark:focus:ring-blue-950"
              />
            </div>

            <button
              type="submit"
              className="mt-2 flex h-11 items-center justify-center rounded-full bg-blue-700 px-6 text-sm font-semibold text-white transition-colors hover:bg-blue-800 focus:outline-none focus:ring-2 focus:ring-blue-300"
            >
              회신 제출
            </button>

            <p className="text-xs leading-5 text-slate-400">
              제출하신 정보는 본 행사 운영 목적으로만 사용됩니다.
            </p>
          </form>
        </section>
      </main>

      <footer className="border-t border-slate-200 bg-white py-6 dark:border-slate-800 dark:bg-slate-950">
        <div className="mx-auto w-full max-w-3xl px-6 text-xs text-slate-400">
          © {new Date().getFullYear()} {EVENT.host}
        </div>
      </footer>
    </div>
  );
}
