package core

type CodatplatformError struct {
	IsCodatplatformError bool
	Sdk              string
	Code             string
	Msg              string
	Ctx              *Context
	Result           any
	Spec             any
}

func NewCodatplatformError(code string, msg string, ctx *Context) *CodatplatformError {
	return &CodatplatformError{
		IsCodatplatformError: true,
		Sdk:              "Codatplatform",
		Code:             code,
		Msg:              msg,
		Ctx:              ctx,
	}
}

func (e *CodatplatformError) Error() string {
	return e.Msg
}
