import React from "react";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import "./SkeletonFrame.scss";

export const SkeletonFrame = () => {
  return (
    <div>
      <div className="skeleton">
        <div className="skeleton-con">
          <Skeleton height={100} width={280} />
          <Skeleton height={20} width={280} />
          <Skeleton height={20} width={280} />
          <Skeleton height={20} width={280} />
          <Skeleton height={20} width={280} />
          <Skeleton height={20} width={280} />
          <Skeleton height={20} width={280} />
        </div>
        <div className="skeleton-con">
          <Skeleton height={100} width={280} />
          <Skeleton height={20} width={280} />
          <Skeleton height={20} width={280} />
          <Skeleton height={20} width={280} />
          <Skeleton height={20} width={280} />
          <Skeleton height={20} width={280} />
          <Skeleton height={20} width={280} />
        </div>
        <div className="skeleton-con">
          <Skeleton height={100} width={280} />
          <Skeleton height={20} width={280} />
          <Skeleton height={20} width={280} />
          <Skeleton height={20} width={280} />
          <Skeleton height={20} width={280} />
          <Skeleton height={20} width={280} />
          <Skeleton height={20} width={280} />
        </div>
      </div>
    </div>
  );
};

export const SkeletonFrame2 = () => {
  return (
    <div>
      <div className="skeleton-2">
        <div className="skeleton-con">
          <Skeleton height={100} width={280} />
          <Skeleton height={20} width={280} />
          <Skeleton height={20} width={280} />
          <Skeleton height={20} width={280} />
          <Skeleton height={20} width={280} />
          <Skeleton height={20} width={280} />
          <Skeleton height={20} width={280} />
        </div>
        <div className="skeleton-con">
          <Skeleton height={100} width={280} />
          <Skeleton height={20} width={280} />
          <Skeleton height={20} width={280} />
          <Skeleton height={20} width={280} />
          <Skeleton height={20} width={280} />
          <Skeleton height={20} width={280} />
          <Skeleton height={20} width={280} />
        </div>
        <div className="skeleton-con">
          <Skeleton height={100} width={280} />
          <Skeleton height={20} width={280} />
          <Skeleton height={20} width={280} />
          <Skeleton height={20} width={280} />
          <Skeleton height={20} width={280} />
          <Skeleton height={20} width={280} />
          <Skeleton height={20} width={280} />
        </div>
      </div>
    </div>
  );
};
