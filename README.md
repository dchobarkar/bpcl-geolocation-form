# BPCL Geolocation Form

## About the Project

BPCL Geolocation Form is a web application developed for Bharat Petroleum Corporation Limited (BPCL). The application provides a simple and intuitive form interface that captures geolocation data of the user's device during form submission. This tool is designed to assist BPCL in collecting field data efficiently and accurately.

## Features

- **Device Geolocation Capture:** Automatically captures the user's latitude and longitude during form submission.
- **Form Validations:** Ensures input correctness using `zod` for validation.
- **Responsive Design:** Built with Tailwind CSS for a seamless experience across devices.
- **Modern Frameworks:** Developed with Next.js and React for scalability and performance.

## Tech Stack

- **Frontend:** Next.js, React, Tailwind CSS
- **Validation:** Zod
- **Backend Integration:** AWS SDK
- **Languages:** TypeScript
- **Styling:** Tailwind CSS

## Getting Started

To get a local copy of the project up and running, follow these steps:

### Prerequisites

Ensure you have the following installed on your system:

- [Node.js](https://nodejs.org/) (v16 or later)
- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)
- [Git](https://git-scm.com/)

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/dchobarkar/bpcl-geolocation-form.git
   cd bpcl-geolocation-form
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

   or with `yarn`:

   ```bash
   yarn install
   ```

3. Create a `.env` file in the root directory to store environment variables.

4. Run the development server:

   ```bash
   npm run dev
   ```

   or with `yarn`:

   ```bash
   yarn dev
   ```

5. Open your browser and navigate to:
   ```
   http://localhost:3000
   ```

## Usage

1. Navigate to the form's landing page.
2. Select the officer name and form type.
3. Fill out the required fields.
4. The application will automatically capture geolocation details.
5. Submit the form to send the data.

## Deployment

The application can be deployed on any hosting platform that supports Node.js. For example:

- **Vercel**: Seamless integration with Next.js.
- **AWS Amplify**: Supports serverless architecture.
- **Netlify**: Ideal for quick deployments.

## Contributing

Contributions are welcome! If you have suggestions for improvement or new features, feel free to fork the repository and create a pull request. Alternatively, you can open an issue with the tag "enhancement".

Steps to contribute:

1. Fork the repository.
2. Create a new branch:
   ```bash
   git checkout -b feature/YourFeatureName
   ```
3. Make your changes and commit them:
   ```bash
   git commit -m "Add YourFeatureName"
   ```
4. Push to the branch:
   ```bash
   git push origin feature/YourFeatureName
   ```
5. Open a pull request.

## License

Distributed under the MIT License. See `LICENSE` for more information.

## Contact

Darshan Chobarkar  
[LinkedIn](https://www.linkedin.com/in/dchobarkar/) | [GitHub](https://github.com/dchobarkar) | [Portfolio](https://darshanwebdev.com)

**Project Link:** [BPCL Geolocation Form](https://github.com/dchobarkar/bpcl-geolocation-form)
