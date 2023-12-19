"use client";
import React, { useState, useEffect } from "react";
import { Formik, Form, Field } from "formik";
import style from "./Newsletter.module.css"
import * as Yup from "yup";

const requiredSchema = Yup.object({
  email: Yup.string().email("Invalid email").required("Email is required"),
});

export default function NewsLetter() {
  const [status, setStatus] = useState(null);
  const [message, setMessage] = useState("");
  const [buttonDisabled, setButtonDisabled] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [run, setRun] = useState(false);
  const [totalCounts, setTotalCounts] = useState(400);
  const [dimensions, setDimensions] = useState({
    width: 0,
    height: 0,
  });

  useEffect(() => {
    const { innerWidth: width, innerHeight: height } = window;
    setDimensions({
      width,
      height,
    });
  }, []);

  return (
    <section className={style.newsletterstyle}>
      <div className="w-full p-5 md:p-6 space-y-5 bg-custom shadow-md rounded-xl">
        {/* Header and description */}
        <div className="pb-2 space-y-3">
          <h1 className="text-2xl font-black sm:text-2.5xl">
            Subscribe to get 25% Off!
          </h1>
          <p className="text-gray-600">
            Receive notifications of high-quality robes and towels!
          </p>
        </div>

        {/* Formik */}
        <Formik
          initialValues={{
            email: "",
          }}
          validationSchema={requiredSchema}
          onSubmit={async (values, { resetForm }) => {
            setButtonDisabled(true);
            try {
              const response = await fetch("/api/newsletter", {
                method: "POST",
                headers: {
                  "Content-Type": "application/json",
                },
                body: JSON.stringify({
                  email: values?.email,
                }),
              });
              const datas = await response.json();
              if (datas.status >= 400) {
                setStatus(datas.status);
                setMessage(
                  "Error joining the newsletter. You can directly contact us at info@hushhaven."
                );
                setTimeout(() => {
                  setMessage("");
                  setButtonDisabled(false);
                }, 2000);
                return;
              }

              setStatus(201);
              setMessage("Thank you for subscribing my newsletter.");
              setRun(true);
              setTimeout(() => {
                setTotalCounts(0);
                setMessage("");
                resetForm();
                setButtonDisabled(false);
              }, 4000);
              setTotalCounts(400);
            } catch (error) {
              setStatus(500);
              setMessage(
                "Error joining the newsletter. You can directly contact us at info@hushhaven."
              );
              setTimeout(() => {
                setMessage("");
                setButtonDisabled(false);
              }, 2000);
            }
          }}
        >
          <Form>
            <div className="flex items-center space-x-2">
              <Field
                type="email"
                name="email"
                className="w-full px-5 py-3 bg-gray-100 rounded-md outline-none grow"
                placeholder="Enter your email"
                autoComplete="off"
              />
              <button
                className="px-5 py-3 font-bold text-gray-100 transition-all bg-gray-800 rounded-md hover:bg-gray-900 hover:scale-105 disabled:opacity-80"
                type="submit"
                disabled={buttonDisabled}
              >
                {submitting ? "Submitting" : "Submit"}
              </button>
            </div>
            {message && (
              <p
                className={`${
                  status !== 201 ? "text-red-500" : "text-green-500"
                } pt-4 font-black `}
              >
                {message}
              </p>
            )}
          </Form>
        </Formik>
      </div>
    </section>
  );
}
