"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { services } from "@/lib/services";

const schema = z.object({
  name: z.string().min(2, "Please enter your name"),
  phone: z.string().min(6, "Please enter a valid phone number"),
  email: z.string().email("Please enter a valid email"),
  suburb: z.string().optional(),
  service: z.string().optional(),
  details: z.string().optional(),
  contactMethod: z.enum(["phone", "email"]).default("phone"),
  // honeypot
  website: z.string().optional(),
});

type FormValues = z.infer<typeof schema>;

export function EnquiryForm({
  defaultService,
  defaultSuburb,
  compact = false,
}: {
  defaultService?: string;
  defaultSuburb?: string;
  compact?: boolean;
}) {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<FormValues>({
    resolver: zodResolver(schema),
    defaultValues: {
      service: defaultService,
      suburb: defaultSuburb,
      contactMethod: "phone",
    },
  });

  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");
  const [message, setMessage] = useState("");

  const onSubmit = async (values: FormValues) => {
    if (values.website) return; // honeypot
    try {
      const res = await fetch("/api/enquiry", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      });
      if (!res.ok) throw new Error("Failed");
      setStatus("success");
      setMessage("Thanks — we've received your enquiry and will be in touch within one business day.");
      reset();
    } catch {
      setStatus("error");
      setMessage("Sorry, something went wrong. Please call 0457 324 417 or email jon@butterflybuilt.com.au.");
    }
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      noValidate
      className={`grid gap-4 ${compact ? "" : "rounded-none border border-charcoal/10 bg-white p-6 sm:p-8"}`}
      aria-labelledby="enquiry-heading"
    >
      <input
        type="text"
        tabIndex={-1}
        autoComplete="off"
        aria-hidden="true"
        className="hidden"
        {...register("website")}
      />

      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className="eyebrow mb-2 block">
            Name *
          </label>
          <input id="name" className="input-base" autoComplete="name" {...register("name")} />
          {errors.name && (
            <p className="mt-1 text-xs text-red-700">{errors.name.message}</p>
          )}
        </div>
        <div>
          <label htmlFor="phone" className="eyebrow mb-2 block">
            Phone *
          </label>
          <input
            id="phone"
            className="input-base"
            autoComplete="tel"
            inputMode="tel"
            {...register("phone")}
          />
          {errors.phone && (
            <p className="mt-1 text-xs text-red-700">{errors.phone.message}</p>
          )}
        </div>
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label htmlFor="email" className="eyebrow mb-2 block">
            Email *
          </label>
          <input
            id="email"
            type="email"
            className="input-base"
            autoComplete="email"
            {...register("email")}
          />
          {errors.email && (
            <p className="mt-1 text-xs text-red-700">{errors.email.message}</p>
          )}
        </div>
        <div>
          <label htmlFor="suburb" className="eyebrow mb-2 block">
            Suburb
          </label>
          <input id="suburb" className="input-base" {...register("suburb")} />
        </div>
      </div>

      <div>
        <label htmlFor="service" className="eyebrow mb-2 block">
          Service required
        </label>
        <select id="service" className="input-base" {...register("service")}>
          <option value="">Select a service…</option>
          {services.map((s) => (
            <option key={s.slug} value={s.shortName}>
              {s.name}
            </option>
          ))}
          <option value="Other">Other</option>
        </select>
      </div>

      <div>
        <label htmlFor="details" className="eyebrow mb-2 block">
          Project details
        </label>
        <textarea id="details" rows={5} className="input-base" {...register("details")} />
      </div>

      <fieldset>
        <legend className="eyebrow mb-2">Preferred contact</legend>
        <div className="flex gap-6 text-sm">
          <label className="flex items-center gap-2">
            <input type="radio" value="phone" {...register("contactMethod")} /> Phone
          </label>
          <label className="flex items-center gap-2">
            <input type="radio" value="email" {...register("contactMethod")} /> Email
          </label>
        </div>
      </fieldset>

      <button type="submit" disabled={isSubmitting} className="btn-primary mt-2 w-full sm:w-auto">
        {isSubmitting ? "Sending…" : "Send Enquiry"}
      </button>

      {status === "success" && (
        <p role="status" className="mt-2 text-sm text-sage-600">
          {message}
        </p>
      )}
      {status === "error" && (
        <p role="alert" className="mt-2 text-sm text-red-700">
          {message}
        </p>
      )}

      <p className="mt-2 text-xs text-charcoal-muted">
        By submitting you agree to be contacted by Butterfly Built about your enquiry.
      </p>
    </form>
  );
}
