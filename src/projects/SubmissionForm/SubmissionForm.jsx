import React, { useState } from "react";
import BackToProjectsButton from "../components/BackToProjectsButton";

const SubmissionForm = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    contact: "",
    gender: "male",
    bestSubject: [],
    file: null,
    url: "",
    comments: "",
  });

  const handleSubmit = (event) => {
    event.preventDefault();

    alert(
      `Form submitted by: \nFirst Name: ${formData.firstName}\nLast Name: ${
        formData.lastName
      }\nEmail: ${formData.email}\nContact: ${formData.contact}\nGender: ${
        formData.gender
      }\nBest Subject: ${formData.bestSubject} \nFile: ${
        formData.file ? formData.file.name : "No file selected"
      }\nComments: ${formData.comments}\nURL: ${formData.url}`
    );
  };
  return (
    <>
      <BackToProjectsButton />
      <div className="container mx-auto p-4 flex flex-col items-center ">
        <form onSubmit={handleSubmit} className=" w-full max-w-lg mt-4">
          <fieldset className="fieldset bg-base-200 border-base-300 rounded-box border p-4 mb-4">
            <legend className="fieldset-legend">Form in React + DaisyUI</legend>

            <label className="label">First Name</label>
            <input
              type="text"
              className="input w-full"
              placeholder="First Name"
              value={formData.firstName}
              onChange={(e) =>
                setFormData({ ...formData, firstName: e.target.value })
              }
            />
            <label className="label">Last Name</label>
            <input
              type="text"
              className="input w-full"
              placeholder="Last Name"
              value={formData.lastName}
              onChange={(e) =>
                setFormData({ ...formData, lastName: e.target.value })
              }
            />
            <label className="label">Email</label>
            <label className="input validator w-full">
              <svg
                className="h-[1em] opacity-50"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <g
                  strokeLinejoin="round"
                  strokeLinecap="round"
                  strokeWidth="2.5"
                  fill="none"
                  stroke="currentColor"
                >
                  <rect width="20" height="16" x="2" y="4" rx="2"></rect>
                  <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
                </g>
              </svg>
              <input
                type="email"
                placeholder="mail@site.com"
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
                value={formData.email}
                required
              />
            </label>
            <div className="validator-hint hidden">
              Enter valid email address
            </div>

            <label className="label">Contact</label>
            <label className="input validator w-full">
              <svg
                className="h-[1em] opacity-50"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 16 16"
              >
                <g fill="none">
                  <path
                    d="M7.25 11.5C6.83579 11.5 6.5 11.8358 6.5 12.25C6.5 12.6642 6.83579 13 7.25 13H8.75C9.16421 13 9.5 12.6642 9.5 12.25C9.5 11.8358 9.16421 11.5 8.75 11.5H7.25Z"
                    fill="currentColor"
                  ></path>
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M6 1C4.61929 1 3.5 2.11929 3.5 3.5V12.5C3.5 13.8807 4.61929 15 6 15H10C11.3807 15 12.5 13.8807 12.5 12.5V3.5C12.5 2.11929 11.3807 1 10 1H6ZM10 2.5H9.5V3C9.5 3.27614 9.27614 3.5 9 3.5H7C6.72386 3.5 6.5 3.27614 6.5 3V2.5H6C5.44771 2.5 5 2.94772 5 3.5V12.5C5 13.0523 5.44772 13.5 6 13.5H10C10.5523 13.5 11 13.0523 11 12.5V3.5C11 2.94772 10.5523 2.5 10 2.5Z"
                    fill="currentColor"
                  ></path>
                </g>
              </svg>
              <input
                type="tel"
                className="tabular-nums "
                required
                placeholder="Phone"
                pattern="[0-9]*"
                minlength="10"
                maxlength="10"
                title="Must be 10 digits"
                onChange={(e) => {
                  setFormData({ ...formData, contact: e.target.value });
                }}
              />
            </label>
            <p className="validator-hint">Must be 10 digits</p>

            <span className="label-text">Gender</span>
            <label className="label">
              <label>Male</label>
              <input
                type="radio"
                name="radio-gender"
                className="radio radio-neutral"
                value="male"
                checked={formData.gender === "male"}
                onChange={(e) =>
                  setFormData({ ...formData, gender: e.target.value })
                }
                defaultChecked
              />
              <label>Female</label>
              <input
                type="radio"
                name="radio-gender"
                className="radio radio-neutral"
                value="female"
                checked={formData.gender === "female"}
                onChange={(e) =>
                  setFormData({ ...formData, gender: e.target.value })
                }
              />
              <label>Other</label>
              <input
                type="radio"
                name="radio-gender"
                className="radio radio-neutral"
                value="other"
                checked={formData.gender === "other"}
                onChange={(e) =>
                  setFormData({ ...formData, gender: e.target.value })
                }
              />
            </label>

            <span className="label-text">Best Subjects</span>

            <label className="label text-black">
              <label className="label">Math</label>
              <input
                type="checkbox"
                className="checkbox checkbox-primary"
                value="Math"
                checked={formData.bestSubject.includes("Math")}
                onChange={(e) => {
                  e.target.checked
                    ? setFormData({
                        ...formData,
                        bestSubject: [...formData.bestSubject, "Math"],
                      })
                    : setFormData({
                        ...formData,
                        bestSubject: formData.bestSubject.filter(
                          (subject) => subject !== "Math"
                        ),
                      });
                }}
              />
              <label className="label">Science</label>
              <input
                type="checkbox"
                className="checkbox checkbox-primary"
                value="Science"
                checked={formData.bestSubject.includes("Science")}
                onChange={(e) => {
                  e.target.checked
                    ? setFormData({
                        ...formData,
                        bestSubject: [...formData.bestSubject, "Science"],
                      })
                    : setFormData({
                        ...formData,
                        bestSubject: formData.bestSubject.filter(
                          (subject) => subject !== "Science"
                        ),
                      });
                }}
              />
              <label className="label">English</label>
              <input
                type="checkbox"
                className="checkbox checkbox-primary"
                value="English"
                checked={formData.bestSubject.includes("English")}
                onChange={(e) => {
                  e.target.checked
                    ? setFormData({
                        ...formData,
                        bestSubject: [...formData.bestSubject, "English"],
                      })
                    : setFormData({
                        ...formData,
                        bestSubject: formData.bestSubject.filter(
                          (subject) => subject !== "English"
                        ),
                      });
                }}
              />
              <label className="label">Crashing out</label>
              <input
                type="checkbox"
                className="checkbox checkbox-primary"
                value="Crashing out"
                checked={formData.bestSubject.includes("Crashing out")}
                onChange={(e) => {
                  e.target.checked
                    ? setFormData({
                        ...formData,
                        bestSubject: [...formData.bestSubject, "Crashing out"],
                      })
                    : setFormData({
                        ...formData,
                        bestSubject: formData.bestSubject.filter(
                          (subject) => subject !== "Crashing out"
                        ),
                      });
                }}
              />
            </label>

            <fieldset className="fieldset">
              <legend className="fieldset-legend">Pick a file</legend>
              <input
                type="file"
                className="file-input"
                onChange={(e) => {
                  const file = e.target.files[0];
                  if (file) {
                    setFormData({ ...formData, file });
                  }
                }}
              />
              <label className="label">Max size 2MB</label>
            </fieldset>

            <label className="label">Enter URL</label>
            <input
              type="url"
              className="input validator w-full"
              required
              placeholder="https://"
              value={formData.url}
              pattern="^(https?://)?([a-zA-Z0-9]([a-zA-Z0-9-].*[a-zA-Z0-9])?.)+[a-zA-Z].*$"
              title="Must be valid URL"
              onChange={(e) =>
                setFormData({ ...formData, url: e.target.value })
              }
            />
            <p className="validator-hint">Must be valid URL</p>

            <label className="label">Select an option</label>
            <select
              defaultValue={"Select"}
              className="select select-bordered w-full"
            >
              <option disabled value="Select">
                Select
              </option>
              <option value="Option 1">I need a job</option>
              <option value="Option 2">I want to crash out</option>
              <option value="Option 3">Other</option>
            </select>

            <label className="label">Comments</label>
            <textarea
              className="textarea textarea-bordered w-full mt-4"
              placeholder="Additional comments"
              value={formData.comments || ""}
              onChange={(e) =>
                setFormData({ ...formData, comments: e.target.value })
              }
            >
              Tell me about yourself
            </textarea>
            <button type="reset" className="btn btn-secondary">
              Reset
            </button>
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </fieldset>
        </form>
      </div>
    </>
  );
};

export default SubmissionForm;
