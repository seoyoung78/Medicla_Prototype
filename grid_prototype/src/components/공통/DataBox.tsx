import { useRef, useState } from "react";
import { UFODateField } from "luna-ufo";
import { UFOButton } from "luna-ufo";
import { useResetRecoilState } from "recoil";
import { UFOPeriodDateField } from "luna-ufo";
import { getPastMonth } from "../../utils/util";

const style = {
  testDate: {
    display: "flex",
    justifyContent: "flex-start",
    alignItems: "center",
    fontSize: "14px",
    border: "none"
  },
  testDateInput: {
    width: "100px",
    backgroundColor: "white",
    border: "1px solid rgb(216, 216, 216)",
    marginRight: "5px"
  }
};

export default function DateBox({ showFrom, showPastBtn, value, setValue }) {
  const testDateRef = useRef<UFODateField>(null);

  return (
    <div style={style.testDate}>
      {showFrom ? (
        <div className="LS_saoinput" style={{ width: "300px" }}>
          <UFOPeriodDateField
            onChange={(event, v) => {
              setValue(v);
            }}
            value={value}
          />
        </div>
      ) : (
        <div style={style.testDateInput}>
          <UFODateField
            ref={testDateRef}
            onChange={(event, v: Date) => {
              setValue({ ...value, to: v });
            }}
            onFocus={() => {
              testDateRef.current.openDialog();
            }}
            onMoveFocus={(move: string) => {}}
            value={value.to}
          />
        </div>
      )}

      <div style={{ marginRight: "5px" }}>
        <UFOButton
          label={"오늘"}
          onClick={() => {
            setValue({ from: new Date(), to: new Date() });
          }}
        />
        {showPastBtn ? (
          <>
            <UFOButton
              label={"3개월"}
              onClick={() => {
                setValue({
                  from: getPastMonth(3),
                  to: new Date()
                });
              }}
            />
            <UFOButton
              label={"6개월"}
              onClick={() => {
                setValue({
                  from: getPastMonth(6),
                  to: new Date()
                });
              }}
            />
            <UFOButton
              label={"1년"}
              onClick={() => {
                setValue({
                  from: getPastMonth(12),
                  to: new Date()
                });
              }}
            />
          </>
        ) : null}
      </div>
    </div>
  );
}