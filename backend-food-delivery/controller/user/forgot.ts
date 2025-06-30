import { Request, Response } from "express";
import { UserModel } from "../../model/users.model";
import nodemailer from "nodemailer";
import { OtpModel, OtpPopulated } from "../../model/otp.model";
import bcrypt from "bcrypt";

export const sendOtp = async (request: Request, response: Response) => {
  try {
    const { email } = request.body;
    const isEmailExist = await UserModel.findOne({ email });

    if (!isEmailExist) {
      response.status(404).send({ message: "User not found" });
      return;
    }

    const testOtp = "7890";

    const transport = nodemailer.createTransport({
      service: "gmail",
      host: "smtp.gmail.com",
      port: 465,
      secure: true,
      auth: {
        user: "gboloro@gmail.com",
        pass: "vfdqmogeujjvpzcv",
      },
    });

    const options = {
      from: "gboloro@gmail.com",
      to: email,
      subject: "hello",
      text: testOtp,
      // html: `<div style="color: red">Hello html test</div>`,
    };

    await OtpModel.create({ otp: testOtp, userId: isEmailExist._id });

    // response.status(200).send({ message: "Amjilttai" });

    await transport.sendMail(options);
    response.status(200).send("Success");
  } catch (error) {
    // alert(error);
    response.status(400).send({ message: error });
    return;
  }
};

export const verifyOtp = async (request: Request, response: Response) => {
  const { otp, email } = request.body;
  try {
    const testOtp = "7890";
    // if (otp == testOtp) {
    //   response.status(200).send({ message: "Code matched" });
    //   return;
    // } else {
    //   response.status(400).send({ message: "Not matched, please try again" });
    // }
    const isOtpExist = await OtpModel.findOne({ otp }).populate<OtpPopulated>(
      "userId"
    );

    if (!isOtpExist) {
      response.status(401).send("Wrong code");
      return;
    }

    if (email === isOtpExist?.userId?.email) {
      response.status(200).send({ message: "success", isOtpExist });
      return;
    }
    response.status(400).send("Wrong code");
    return;
  } catch (error) {
    response.status(400).send({ message: error });
  }
};

export const updatePass = async (request: Request, response: Response) => {
  try {
    const { password, email } = request.body;
    const isEmailExist = await UserModel.findOne({ email });

    if (!isEmailExist) {
      response.status(404).send({ message: "User not found" });
      return;
    }
    const hashedPassword = bcrypt.hashSync(password, 10);

    const result = await UserModel.updateOne(
      { email },
      { password: hashedPassword, updatedAt: new Date() }
      // { new: true }
    );
    // console.log(result);
    response
      .status(200)
      .send({ message: "Updated successfully, login with new password" });
    return;
  } catch (error: any) {
    response.status(400).send({ message: error });
  }
};
