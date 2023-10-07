import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";
import { useForm } from "react-hook-form";

const Form = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      message: "",
    },
  });

  const onSubmit = () => {
    reset();
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-col gap-6 w-full"
    >
      <div className="relative">
        <Input
          type="text"
          {...register("name", {
            required: "Can't be empty",
          })}
          placeholder="Name"
          formNoValidate
        />

        {errors.name && (
          <span className="absolute flex items-center gap-2 right-2 top-1/2 -translate-y-1/2">
            <span className="text-xs/[1.625rem] italic text-primary-white">
              {errors.name?.message}
            </span>
            <span>
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20">
                <g fill="none" fillRule="evenodd">
                  <circle cx="10" cy="10" r="10" fill="#FFF" />
                  <path fill="#E7816B" d="M11 14v2H9v-2h2zm0-9v7H9V5h2z" />
                </g>
              </svg>
            </span>
          </span>
        )}
      </div>

      <div className="relative">
        {errors.email && (
          <span className="absolute flex items-center gap-2 right-2 top-1/2 -translate-y-1/2">
            <span className="text-xs/[1.625rem] italic text-primary-white">
              {errors.email?.message}
            </span>
            <span>
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20">
                <g fill="none" fillRule="evenodd">
                  <circle cx="10" cy="10" r="10" fill="#FFF" />
                  <path fill="#E7816B" d="M11 14v2H9v-2h2zm0-9v7H9V5h2z" />
                </g>
              </svg>
            </span>
          </span>
        )}
        <Input
          type="email"
          {...register("email", {
            required: "Can't be empty",
            pattern: {
              value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
              message: "Must be an email",
            },
          })}
          placeholder="Email Address"
        />
      </div>

      <div className="relative">
        {errors.phone && (
          <span className="absolute flex items-center gap-2 right-2 top-1/2 -translate-y-1/2">
            <span className="text-xs/[1.625rem] italic text-primary-white">
              {errors.phone?.message}
            </span>
            <span>
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20">
                <g fill="none" fillRule="evenodd">
                  <circle cx="10" cy="10" r="10" fill="#FFF" />
                  <path fill="#E7816B" d="M11 14v2H9v-2h2zm0-9v7H9V5h2z" />
                </g>
              </svg>
            </span>
          </span>
        )}

        <Input
          type="text"
          {...register("phone", {
            pattern: {
              value: /^\d{10}$/,
              message: "Must be a phone number",
            },
          })}
          placeholder="Phone"
        />
      </div>

      <div className="relative">
        {errors.message && (
          <span className="absolute flex items-center gap-2 right-2 top-1/2 -translate-y-1/2">
            <span className="text-xs/[1.625rem] italic text-primary-white">
              {errors.message?.message}
            </span>
            <span>
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20">
                <g fill="none" fillRule="evenodd">
                  <circle cx="10" cy="10" r="10" fill="#FFF" />
                  <path fill="#E7816B" d="M11 14v2H9v-2h2zm0-9v7H9V5h2z" />
                </g>
              </svg>
            </span>
          </span>
        )}
        <Textarea
          {...register("message", {
            required: "Can't be empty",
          })}
          cols={40}
          rows={10}
          placeholder="Your Message"
        ></Textarea>
      </div>
      <Button variant={"dark"} type="submit" className="self-end mt-4">
        submit
      </Button>
    </form>
  );
};

export default Form;
