"use client";
import React, { useRef } from "react";
import styles from "./ImagePicker.module.scss";

interface ImagePickerProps {
  label: string;
  name: string;
}

const ImagePicker: React.FC<ImagePickerProps> = ({ label, name }) => {
  const imageInput = useRef<HTMLInputElement>(null);
  const handlePick = () => {
    imageInput.current?.click();
  };
  return (
    <div className={styles.picker}>
      <label htmlFor={name}> {label}</label>
      <div className={styles.controls}>
        <input
          className={styles.input}
          type="file"
          id={name}
          accept="image/png image/jpeg"
          name={name}
          ref={imageInput}
        />
        <button className={styles.button} type="button" onClick={handlePick}>
          Pick an Image
        </button>
      </div>
    </div>
  );
};

export default ImagePicker;
