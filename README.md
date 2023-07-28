# Triangle Challenge

This project is a web application developed with React.js and Next.js that solves the "Triangle Problem." The objective of the problem is to find the path that yields the maximum sum when traversing a numeric triangle from the top to the bottom, moving only to one of the two adjacent numbers in each row.

## Project Features

- Calculates the maximum sum from the top to the bottom of the numeric triangle.
- Allows loading a text file containing the triangle data.
- Visualizes the triangle on the screen with highlighted cells forming the maximum sum path.
- Provides animation when the maximum sum path is formed.
- Uses Tailwind CSS to style the components.
- Includes unit tests before merge a PR (Github Actions CD/CI).

## How to Use the Application

1. Clone this repository on your local machine.
2. Install the dependencies with the command `npm install` or `yarn install`.
3. Run the application with the command `npm run dev` or `yarn dev`.
4. Access the application in your web browser at `http://localhost:3000`.
5. Click on the "Upload" button to load a text file with the triangle data.
6. Observe how the triangle is displayed on the screen with highlighted cells forming the maximum sum path.

## Project Structure

- `pages/index.tsx`: Main page that contains the core logic of the application.
- `components/atoms/UploadButton/UploadButton.tsx`: Component for uploading the text file.
- `components/complex/Triangle/Triangle.tsx`: Component that displays the triangle and highlights the maximum sum path.

