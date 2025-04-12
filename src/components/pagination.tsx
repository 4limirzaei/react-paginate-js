"use client";

type PropsType = {
  currentPage: number;
  total: number;
  onChange: (value: number) => void;
  pageSize?: number;
  maxVisiblePages?: number;
  className?: string;
  buttonClassName?: string;
  activeButtonClassName?: string;
  disabledButtonClassName?: string;
  renderPageButton?: (
    page: number,
    isActive: boolean,
    onClick: () => void
  ) => React.ReactNode;
  renderEllipsis?: () => React.ReactNode;
  renderPrevButton?: (
    disabled: boolean,
    onClick: () => void
  ) => React.ReactNode;
  renderNextButton?: (
    disabled: boolean,
    onClick: () => void
  ) => React.ReactNode;
};

export default function Pagination({
  currentPage = 0,
  total = 0,
  onChange,
  pageSize = 10,
  maxVisiblePages = 5,
  className = "",
  buttonClassName = "",
  activeButtonClassName = "",
  disabledButtonClassName = "",
  renderPageButton,
  renderEllipsis = () => <span className={disabledButtonClassName}>...</span>,
  renderPrevButton = (disabled, onClick) => (
    <button disabled={disabled} onClick={onClick} className={buttonClassName}>
      &lt;
    </button>
  ),
  renderNextButton = (disabled, onClick) => (
    <button disabled={disabled} onClick={onClick} className={buttonClassName}>
      &gt;
    </button>
  ),
}: PropsType) {
  const totalPages = Math.ceil(total / pageSize);

  const getPageNumbers = () => {
    const pages: (number | string)[] = [];

    if (totalPages <= maxVisiblePages + 2) {
      for (let i = 0; i < totalPages; i++) pages.push(i);
    } else {
      const start = Math.max(1, currentPage - 1);
      const end = Math.min(totalPages - 2, currentPage + 1);

      pages.push(0);

      if (start > 1) pages.push("...");
      for (let i = start; i <= end; i++) pages.push(i);
      if (end < totalPages - 2) pages.push("...");

      pages.push(totalPages - 1);
    }

    return pages;
  };

  const handleChange = (page: number) => {
    if (page !== currentPage) onChange(page);
  };

  if (totalPages <= 1) return null;

  return (
    <div className={className}>
      {renderPrevButton(currentPage === 0, () => handleChange(currentPage - 1))}

      {getPageNumbers().map((page, index) =>
        page === "..." ? (
          <span key={index}>{renderEllipsis()}</span>
        ) : renderPageButton ? (
          <span key={index}>
            {renderPageButton(page as number, currentPage === page, () =>
              handleChange(page as number)
            )}
          </span>
        ) : (
          <button
            key={index}
            className={`${buttonClassName} ${
              currentPage === page ? activeButtonClassName : ""
            }`}
            onClick={() => handleChange(page as number)}
          >
            {(page as number) + 1}
          </button>
        )
      )}

      {renderNextButton(currentPage === totalPages - 1, () =>
        handleChange(currentPage + 1)
      )}
    </div>
  );
}
