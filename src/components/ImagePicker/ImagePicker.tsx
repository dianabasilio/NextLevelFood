"use client";
import React, { useRef, useState } from "react";
import styles from "./ImagePicker.module.scss";
import Image from "next/image";

interface ImagePickerProps {
  label: string;
  name: string;
}

const ImagePicker: React.FC<ImagePickerProps> = ({ label, name }) => {
  const [pickedImage, setPickedImage] = useState<string | ArrayBuffer | null>(
    null
  );

  const imageInput = useRef<HTMLInputElement>(null);
  const handlePick = () => {
    imageInput.current?.click();
  };

  const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) {
      setPickedImage(null);
      return;
    }
    const fileReader = new FileReader();
    fileReader.onload = () => {
      setPickedImage(fileReader.result);
    };
    fileReader.readAsDataURL(file);
  };
  return (
    <div className={styles.picker}>
      <label htmlFor={name}> {label}</label>
      <div className={styles.controls}>
        <div className={styles.preview}>
          {!pickedImage && <p>No image picked yet.</p>}
          {pickedImage && (
            <Image
              src={String(pickedImage)}
              alt="The image selected by the user."
              fill
            ></Image>
          )}
        </div>
        <input
          className={styles.input}
          type="file"
          id={name}
          accept="image/png image/jpeg"
          name={name}
          ref={imageInput}
          onChange={handleImageChange}
          required
        />
        <button className={styles.button} type="button" onClick={handlePick}>
          Pick an Image
        </button>
      </div>
    </div>
  );
};

export default ImagePicker;
