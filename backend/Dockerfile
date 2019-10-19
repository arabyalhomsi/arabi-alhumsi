# Use an official Python runtime as a parent image
FROM python:3

# Set the working directory to /app
WORKDIR /app

COPY ./requirements.txt /app

# Install any needed packages specified in requirements.txt
RUN pip install -r requirements.txt

COPY . /app


# Make port 80 aevailable to the world outside this container

EXPOSE 8000

# Define environment variable
ENV PYTHONUNBUFFERED 1


# Run app.py when the container launches
CMD ["bash", "boot.sh"]